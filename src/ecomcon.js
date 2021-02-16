// ecomcon.js
// Douglas Crockford
// 2018-08-08
// Modified by Jonathan Reimer, 2020-11-19

//MD # ecomcon: Enable Comments Conditionally/p
//MD Created by Douglas Crockford, modified by Jonathan Reimer/p/p
//MD Public Domain/p/p
//MD [Demo](demo.md)/p
//MD /p
//MD ## Modifications:/p
//MD * Exported function is curried to accept either of these styles:/p
//MD     * ecomcon ([tag_list]) (source_string)/p
//MD     * ecomcon ({options}) (source_string)/p
//MD * Enabled comments_array function described in the original documentation/p
//MD * Handler functions can be passed in {options} to process
//MD tagged and untagged lines/p
//MD /p
//MD Ecomcon is a filter that acts on selected comments by making them
//MD executable or removing them. The filter can also be used to generate
//MD documentation files from comments, as well as many other operations.
//MD This makes it possible to put development, performance, documentation, and
//MD testing scaffolding into a source file. The scaffolding is removed by
//MD minification, but is activated by ecomcon. Although the original filter was
//MD implemented in both C and Javascript, this modified version of ecomcon
//MD is only implemented in Javascript./p
//MD /p
//MD Ecomcon is a filter that takes a source file and looks for tagged
//MD comments in this form:/p/p
//MD     //tag stuff/p/p
//MD The line comment starts at the beginning of the line. There can be no
//MD space between the '//' and the tag./p
//MD /p
//MD The filter is available as a curried ecomcon function that first
//MD takes an options parameter, and secondly a source string./p/p

const rx_crlf = /\n|\r\n?/;

const rx_ecomcon = /^\/\/([a-zA-Z0-9_]+)\u0020?(.*)$/;

//. Capturing groups:
//.  [1] The enabled comment tag
//.  [2] The rest of the line

const rx_tag = /^[a-zA-Z0-9_]+$/;

// Default output function
const write_line = function (line) {
    return line + "\n";
};

const remove_empty_lines = function (line) {
    return (line.length > 0);
};

const remove_multiple_blank_lines = function (line, index, source) {
    return ((line !== "\n") || (index === 0) || (source[index - 1] !== "\n"));
};

export default Object.freeze(function ecomcon(options = {}) {
    return function (source_string) {
        let tag = Object.create(null);

//MD The options parameter can be either:/p
//MD 1. An array of tags. This is the original format. All tagged comments will
//MD be enabled./p
//MD 2. An object with the following properties:/p
//MD    * tag_list (optional): an object containing tags as property names and
//MD either the value true or a function to process each tagged line OR an array
//MD of tag names. (Functions override the on_tagged parameter.) Passing an
//MD array [tag_name] is the same as {tag_name: true}./p
//MD    * comments_array (optional): an array containing lines to be inserted at
//MD the beginning of the output file/p
//MD    * on_tagged (optional): a function to process all tagged lines unless a
//MD a function was provided in tag_list. The default behavior is
//MD to return the tagged line without the tag./p
//MD    * on_untagged (optional): a function to process all un-tagged lines.
//MD Default behavior is to output the line unchanged./p/p

// deconstruct options - options may be an array
        const {
            tag_list = [],
            comments_array = [],
            on_tagged = write_line,
            on_untagged = write_line
        } = options;

// options must be an array or an object
        if (typeof options !== "object") {
            throw new Error("ecomcon: invalid tag list");
        }

// validate options as an array and convert to tag object
// this is the original behavior
        if (Array.isArray(options)) {
            options.forEach(
                function (string) {
                    if (!rx_tag.test(string)) {
                        throw new Error("ecomcon: " + string);
                    }
                    tag[string] = true;
                }
            );

// validate tag_list as an array and convert to tag object
        } else if (Array.isArray(tag_list)) {
            tag_list.forEach(
                function (string) {
                    if (!rx_tag.test(string)) {
                        throw new Error("ecomcon: " + string);
                    }
                    tag[string] = true;
                }
            );

// validate tag_list as an object
// property names are tags
// values can be either
//      -true, which will use the default on_tagged function
//      -a unary function to be applied to tagged lines
        } else {
            Object.values(tag_list).forEach(
                function (value) {
                    if ((value !== true) && (
                        (typeof value !== "function") || (value.length > 1)
                    )) {
                        throw new Error("ecomcon: invalid tag function");
                    }
                }
            );
            tag = tag_list;
        }

        if (!Array.isArray(comments_array)) {
            throw new Error("ecomcon: invalid comments list");
        }

// Add functionality described in original documentation
        return comments_array.map(
            function (line) {
                return "// " + write_line(line);
            }
        ).concat(source_string.split(rx_crlf).map(
            function (line) {
                const array = line.match(rx_ecomcon);

// If tag property is true, use global on_tagged function on the line
// If tag property is a function, use it on the line
                return (
                    (Array.isArray(array) && (tag[array[1]] !== undefined))
                    ? (
                        (tag[array[1]] === true)
                        ? on_tagged(array[2])
                        : tag[array[1]](array[2])
                    )
                    : on_untagged(line)
                );
            }
        ).filter(
            remove_empty_lines
        ).filter(
            remove_multiple_blank_lines
        )).join("");
    };
});

// ecomcon.js
// Douglas Crockford
// 2018-08-08

const rx_crlf = /\n|\r\n?/;

const rx_ecomcon = /^\/\/([a-zA-Z0-9_]+)\u0020?(.*)$/;

//. Capturing groups:
//.  [1] The enabled comment tag
//.  [2] The rest of the line

const rx_tag = /^[a-zA-Z0-9_]+$/;

const write_line = function (line) {
    return line + "\n";
};

export default Object.freeze(function (options = {}) {
    return function (source_string) {
        let tag = Object.create(null);

        const {
            tag_array = [],
            comments_array = [],
            on_tagged = write_line,
            on_untagged = write_line
        } = options;

// tag_array may be an array or an object
        if (typeof tag_array !== "object") {
            throw new Error("ecomcon: invalid tag list");
        }

// validate tag_array as an array and convert to tag object
        if (Array.isArray(tag_array)) {
            tag_array.forEach(
                function (string) {
                    if (!rx_tag.test(string)) {
                        throw new Error("ecomcon: " + string);
                    }
                    tag[string] = true;
                }
            );

// validate tag_array as an object with properties being on_tagged functions
// or a boolean true which will use the default on_tagged function
        } else {
            Object.values(tag_array).forEach(
                function (value) {
                    if ((value !== true) && (
                        (typeof value !== "function") || (value.length > 1)
                    )) {
                        throw new Error("ecomcon: invalid tag function");
                    }
                }
            );
            tag = tag_array;
        }

        if (!Array.isArray(comments_array)) {
            throw new Error("ecomcon: invalid comments list");
        }

        return comments_array.map(
            function (line) {
                return "// " + write_line(line);
            }
        ).concat(source_string.split(rx_crlf).map(
            function (line) {
                const array = line.match(rx_ecomcon);

// If tag property is true, use global on_tagged function
// If tag property is a function, use it as the on_tagged function
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
        )).join("");
    };
});

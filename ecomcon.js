// ecomcon.js
// Douglas Crockford
// 2018-08-08

const rx_crlf = /\n|\r\n?/;

const rx_ecomcon = /^\/\/([a-zA-Z0-9_]+)\u0020?(.*)$/;

//. Capturing groups:
//.  [1] The enabled comment tag
//.  [2] The rest of the line

const rx_tag = /^[a-zA-Z0-9_]+$/;

// Lines ending with ~n won't receive a newline
const write_line = function (line) {
    return (
        line.endsWith("~n")
        ? line.slice(0, -2)
        : line + "\n"
    );
};

const write_nothing = function (ignore) {
    return "";
};

export default Object.freeze(function (options = {}) {
    return function (source_string) {

        const {
            tag_array = [],
            comments_array = [],
            erase = false,
            extract = false
        } = options;

        const is_tagged_fx = (
            erase
            ? write_nothing
            : write_line
        );

        const not_tagged_fx = (
            extract
            ? write_nothing
            : write_line
        );

        const tag = Object.create(null);
        if (!Array.isArray(tag_array)) {
            throw new Error("ecomcon: invalid tag list");
        }
        tag_array.forEach(
            function (string) {
                if (!rx_tag.test(string)) {
                    throw new Error("ecomcon: " + string);
                }
                tag[string] = true;
            }
        );
        if (!Array.isArray(comments_array)) {
            throw new Error("ecomcon: invalid comments list");
        }
        return comments_array.map(
            function (line) {
                return "// " + write_line (line);
            }
        ).concat(source_string.split(rx_crlf).map(
            function (line) {
                const array = line.match(rx_ecomcon);
                return (
                    (Array.isArray(array) && tag[array[1]] === true)
                    ? is_tagged_fx (array[2])
                    : not_tagged_fx (line)
                );
            }
        )).join("");
    };
});
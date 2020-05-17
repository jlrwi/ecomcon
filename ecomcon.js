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
const write_line = function (is_tagged) {
    return (
        is_tagged
        ? function (line) {
            return (
                line.endsWith("~n")
                ? line.slice(0, -2)
                : line + "\n"
            );
        }
        : function (line) {
            return line + "\n";
        }
    );
};

const write_nothing = function (ignore) {
    return "";
};

export default Object.freeze(function (options = {}) {
    return function (source_string) {
        let activated_erase = false;

        const {
            tag_array = [],
            comments_array = [],
            erase = false,
            extract = false
        } = options;

// If erasing, also recognize "erase" as a valid tag
        if (erase) {
            tag_array.push("erase");
        }

        const is_tagged_fx = (
            erase
            ? write_nothing
            : write_line(true)
        );

        const not_tagged_fx = (
            extract
            ? write_nothing
            : write_line(false)
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
                return "// " + write_line(false)(line);
            }
        ).concat(source_string.split(rx_crlf).map(
            function (line) {
                const array = line.match(rx_ecomcon);

// On erase, tagging with erase and block comments will erase everything
// within the block
                if (erase && Array.isArray(array) && (array[1] === "erase")) {
                    if (array[2].startsWith("/*")) {
                        activated_erase = true;
                    }
                    if (array[2].startsWith("*/")) {
                        activated_erase = false;
                    }
                }

                if (activated_erase) {
                    return is_tagged_fx(line);
                }
                
                return (
                    (Array.isArray(array) && (tag[array[1]] === true))
                    ? is_tagged_fx(array[2])
                    : not_tagged_fx(line)
                );
            }
        )).join("");
    };
});

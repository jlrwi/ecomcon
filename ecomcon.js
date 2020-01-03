// ecomcon.js
// Douglas Crockford
// 2018-08-08

const rx_crlf = /\n|\r\n?/;

const rx_ecomcon = /^\/\/([a-zA-Z0-9_]+)\u0020?(.*)$/;

//. Capturing groups:
//.  [1] The enabled comment tag
//.  [2] The rest of the line

const rx_tag = /^[a-zA-Z0-9_]+$/;

export default Object.freeze(function ecomcon(
    source_string, 
    tag_array = [], 
    comments_array = []
) {
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
            return "// " + line + "\n";
        }
    ).concat(source_string.split(rx_crlf).map(
        function (line) {
            const array = line.match(rx_ecomcon);
            return (
                Array.isArray(array)
                ? (
                    tag[array[1]] === true
                    ? array[2] + "\n"
                    : ""
                )
                : line + "\n"
            );
        }
    )).join("");
});

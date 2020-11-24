/*jslint
    fudge
*/

import ecomcon from "./src/ecomcon.js";

const log = function (x) {
    console.log(x);
    return x;
};

const input = [
    "//taga const a = 'this line was tagged with taga';",
    "//tagb const b = 'this line was tagged with tagb';",
    "const u = 'this line was untagged';",
    "",
    "//block /*",
    "const v = 'this line is untagged inside the block",
    "//block */",
    "",
    "//para These lines of text could be extracted and joined to",
    "//para create a text file.",
    "//para Line breaks must be signalled explicitly",
    "//para (\\n doesn't work here)./p/p",
    "//para In this instance, /p is detected at the end of the line by the",
    "//para on_tagged function to indicate the end of a paragraph./p"
].join("\r\n");

[
    "# ecomcon demo",
    "Source code input:",
    "```javascript",
    input,
    "```"
].forEach(log);

const write_nothing = function (ignore) {
    return "";
};

const write_line = function (line) {
    return line + "\n";
};

const write_text = function (line) {
    return (
        line.endsWith("/p")
        ? write_text(line.slice(0, -2)) + "\n"
        : line + " "
    );
};

const functional_state = function (initial_value) {
    let state = initial_value;

    return function (value) {
        if (value !== undefined) {
            state = value;
        }
        return state;
    };
};

const toggle_erase = functional_state(false);

// Tagged lines followed by block comments will toggle erasing untagged lines
const erase_tagged = function (line) {
    if (line.startsWith("/*")) {
        toggle_erase(true);

    } else if (line.startsWith("*/")) {
        toggle_erase(false);
    }

    return "";
};

const erase_untagged = function (line) {
    return (
        (toggle_erase())
        ? ""
        : line + "\n"
    );
};

const config_options = [

    {
        title: "Activate tagged lines (original behavior)",
        options: ["taga", "tagb"]
    },

    {
        title: "Erase tagged lines",
        options: {
            comments_array: [
                "Demo: Lines taga and tagb should be gone"
            ],
            tag_list: ["taga", "tagb"],
            on_tagged: write_nothing
        }
    },
    {
        title: "Extract tagged lines",
        options: {
            comments_array: [
                "Demo: Lines a and b should be the only lines"
            ],
            tag_list: ["taga", "tagb"],
            on_untagged: write_nothing
        }
    },
    {
        title: "Disable code block",
        options: {
            comments_array: [
                "Demo: deactivate code within a tagged block comment"
            ],
            tag_list: ["block"]
        }
    },
    {
        title: "Extract tagged lines as text",
        options: {
            tag_list: ["para"],
            on_tagged: write_text,
            on_untagged: write_nothing
        }
    },
    {
        title: "Block erase",
        options: {
            comments_array: [
                "Demo: The block tags and the const v=... line should be gone",
                "Function source in demo.js"
            ],
            tag_list: ["block"],
            on_tagged: erase_tagged,
            on_untagged: erase_untagged
        }
    },
    {
        title: "Tags use individual functions",
        options: {
            comments_array: [
                "Demo:",
                "const a=... should be activated",
                "const b=... should be erased",
                "The block tags and the const v=... line should be gone"
            ],
            tag_list: {
                taga: write_line,
                tagb: write_nothing,
                block: erase_tagged
            },
            on_untagged: erase_untagged
        }
    }
];

config_options.forEach(function (demo) {
    const demo_output = [
        "## " + demo.title,
        "Options parameter:",
        "```",
        demo.options,
        "```",
        "Output:",
        "```",
        ecomcon(demo.options)(input),
        "```"
    ];
    demo_output.forEach(log);
});

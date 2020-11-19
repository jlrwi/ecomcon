/*jslint
    fudge, node
*/

import ecomcon from "./ecomcon.js";

const input = [
    "//taga const a = 'this line was tagged with a';",
    "//tagb const b = 'this line was tagged with b';",
    "const u = 'this line was untagged';",
    "",
    "//erase /* this line could begin an erasure block",
    "const v = 'this line is untagged inside the erase block",
    "//erase */",
    "",
    "//para This long line of text could be extracted and joined with",
    "//para following lines in a text file.",
    "//para Line breaks must be signalled explicitly (\\n doesn't work here).",
    "//para In this case, /p is detected at the end of the line by the",
    "//para on_tagged function to indicate the end of a paragraph./p",
    "//para This should start a new line./p"
].join("\r\n");

const write_nothing = function (ignore) {
    return "";
};

const write_lf = function (line) {
    return line + "\n";
};


const write_no_lf = function (line) {
    return (
        line.endsWith("/p")
        ? write_no_lf(line.slice(0, -2)) + "\n"
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

//Original behavior: taga and tagb should be uncommented
    [
        "taga",
        "tagb"
    ],

//No tags passed, file returned unchanged
    [],
    
    {
        comments_array: [
            "TEST: No tag_array",
            "Comments added, file returned otherwise unchanged"
        ],
        tag_list: [
        ]
    },
    {
        comments_array: [
            "TEST: Basic behavior (for backwards compatibility)",
            "Both taga and tagb should be uncommented"
        ],
        tag_list: [
            "taga", 
            "tagb"
        ]
    },
    {   
       comments_array: [
            "TEST: erase tagged lines",
            "Lines taga and tagb should be gone"
        ],
        tag_list: [
            "taga",
            "tagb"
        ],
        on_tagged: write_nothing
    },
    {
        comments_array: [
            "TEST: extract tagged lines",
            "Lines a and b should be the only lines"
        ],
        tag_list: [
            "taga",
            "tagb"
        ],
        on_untagged: write_nothing
    },
    {
        comments_array: [
            "TEST: extract tagged lines with line joins",
            "The tagged lines should be concatenated together as text."
        ],
        tag_list: [
            "para"
        ],
        on_tagged: write_no_lf,
        on_untagged: write_nothing
    },
    {
        comments_array: [
            "TEST: block erase",
            "The erase tags and the const v=... line should be gone"
        ],
        tag_list: [
            "erase"
        ],
        on_tagged: erase_tagged,
        on_untagged: erase_untagged
    },
    {
        comments_array: [
            "TEST: tags use their own on_tagged handlers",
            "const a=... should be activated, const b=... should be erased",
            "The erase tags and the const v=... line should be gone"
        ],
        tag_list: {
            taga: write_lf,
            tagb: write_nothing,
            erase: erase_tagged
        },
        on_untagged: erase_untagged
    }
];

console.log("Here is the full source to be tested:");
console.log("=====================================");
console.log(input + "\n");
console.log("TEST: calling filter with array of tags (the original behavior)");
console.log("The first two lines should be uncommented");

config_options.forEach(function (options) {
    console.log(ecomcon(options)(input));
});
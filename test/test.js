/*jslint
    fudge
*/

import ecomcon from "../src/ecomcon.js";
import jscheck from "@jlrwi/jscheck";
let jsc = jscheck();

const log = function (value) {
    console.log(value);
    return value;
};

// copied from es-static-types
const dictionary_map = function (f) {
    return function (obj) {
        let result = Object.create(null);
        Object.keys(obj).forEach(function (key) {
            result[key] = f(obj[key]);
        });
        return Object.freeze(result);
    };
};

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

const test_functions = dictionary_map (
    function (list) {
        return list.join("\r\n");
    }
) ({
    test_activate_both: [
        "let a = arguments[0];",
        "let b = a + 17;",
        "//tag_a     a += 12;",
        "//tag_b     b -= 5;",
        "//tag                a = 100;",
        "return (a === b);"
    ],
    test_activate_either: [
        "let a = arguments[0];",
        "let b = a + 17;",
        "//tag_a     a += 17;",
        "//tag                b -= 17;",
        "return (a === b);"
    ],
    test_activate_none: [
        "let a = arguments[0];",
        "let b = a;",
        "//tag     a += 12;",
        "//tag     b -= 17;",
        "return (a === b);"
    ],
    test_deactivate_block: [
        "let a = arguments[0];",
        "let b = a;",
        "//tag_a /*",
        "    a += 17;",
        "//tag_a */",
        "return (a === b);"
    ],
    test_multiline: [
        "let a = arguments[0];",
        "let b = a + 17;",
        "//tag_a     a +=",
        "//tag_a     17;",
        "return (a === b);"
    ]
});

const function_tests = [
    {
        title: "tag array",
        options: [
            "tag_a",
            "tag_b"
        ]
    },
    {
        title: "tag array in {options}",
        options: {
            comments_array: [
                "TEST: Basic behavior (for backwards compatibility)",
                "Both taga and tagb should be uncommented"
            ],
            tag_list: [
                "tag_a",
                "tag_b"
            ]
        }
    },
    {
        title: "tag object with true in {options}",
        options: {
            comments_array: [
                "TEST: tag_list as an object with true property values",
                "Both taga and tagb should be uncommented"
            ],
            tag_list: {
                tag_a: true,
                tag_b: true
            }
        }
    },
    {
        title: "tag object with individual handler functions",
        options: {
            comments_array: [
                "TEST: tag_list with individual handlers",
                "Both taga and tagb should be uncommented, tag should be gone"
            ],
            tag_list: {
                tag_a: write_lf,
                tag_b: write_lf,
                tag: write_nothing
            }
        }
    }
];

// Turn each function_tests case into jsCheck claims by applying ecomcon
// to each test_function code snippet and making it into a function
const claim_function_test_case = function (test_source_list) {
    return function ({title, options}) {
        Object.keys(test_source_list).forEach(function (test_key) {
            jsc.claim({
                name: title + ": " + test_key,
                predicate: function (verdict) {
                    return function (a) {
                        const f = Function(
                            ecomcon (options) (test_source_list[test_key])
                        );
                        return verdict(f(a));
                    };
                },
                signature: [jsc.integer()]
            });
        });
    };
};

function_tests.forEach(claim_function_test_case (test_functions));

const line_test_source = [
    "line 1",
    "//tag_a line 2",
    "//tag_b line 3",
    "//tag_b line 4",
    "//tag /* line 5",
    "line 6",
    "line 7",
    "line 8",
    "//tag */ line 9",
    "//tag_a line 10"
];

// Need a line count for the original source
const test_lines = line_test_source.length;
const line_test_code = line_test_source.join("\r\n");

const line_tests = [
    {
        title: "empty array passed as options",
        options: [],
        net_lines: 0
    },
    {
        title: "empty tag_array",
        options: {
            comments_array: [
                "TEST: empty tag_array",
                "Output should be unchanged"
            ],
            tag_list: []
        },
        net_lines: 2
    },
    {
        title: "extract lines",
        options: {
            comments_array: [
                "TEST: extract tagged lines",
                "all but tagged lines should be removed"
            ],
            tag_list: [
                "tag_a",
                "tag_b"
            ],
            on_untagged: write_nothing
        },
        net_lines: -4
    },
    {
        title: "erase lines",
        options: {
            comments_array: [
                "TEST: erase tagged lines",
                "The tagged lines should be gone"
            ],
            tag_list: [
                "tag_a",
                "tag_b"
            ],
            on_tagged: erase_tagged,
            on_untagged: erase_untagged
        },
        net_lines: -2
    },
    {
        title: "block erase",
        options: {
            comments_array: [
                "TEST: block erase",
                "The tagged lines and lines in between should be gone"
            ],
            tag_list: [
                "tag"
            ],
            on_tagged: erase_tagged,
            on_untagged: erase_untagged
        },
        net_lines: -3

    },
    {
        title: "individual tag functions",
        options: {
            comments_array: [
                "TEST: tags use their own on_tagged handlers",
                "tag_a should be activated, tag_b should be erased",
                "The erase tags and its inner lines should be gone"
            ],
            tag_list: {
                tag_a: write_lf,
                tag_b: write_nothing,
                tag: erase_tagged
            },
            on_untagged: erase_untagged
        },
        net_lines: -4
    }
];

// Create jsCheck claims for each line_tests case
// Run ecomcon on the source text and count the lines
line_tests.forEach(function ({title, options, net_lines}) {
    jsc.claim({
        name: title,
        predicate: function (verdict) {
            return function (ignore) {
                const result = ecomcon (options) (line_test_code);
                return verdict(
                    (test_lines + net_lines + 1) === result.split("\n").length
                );
            };
        },
        signature: [jsc.boolean()]
    });
});

jsc.check({
    on_report: log,
    nr_trials: 20
});
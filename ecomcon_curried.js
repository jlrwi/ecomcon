import ecomcon from "./ecomcon.js";

export default function (config) {
    return function (input) {
        return ecomcon (input, config.tags, config.comments);
    };
};
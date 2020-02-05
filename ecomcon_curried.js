import ecomcon from "./ecomcon.js";

export default Object.freeze(function (config) {
    return function (input) {
        return ecomcon(input, config.tags, config.comments, config.erase);
    };
});
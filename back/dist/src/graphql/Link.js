"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
const nexus_1 = require("nexus");
exports.Link = (0, nexus_1.objectType)({
    name: "Link",
    definition(t) {
        // 2
        t.nonNull.int("id"); // 3
        t.nonNull.string("description"); // 4
        t.nonNull.string("url"); // 5
    },
});
//# sourceMappingURL=Link.js.map
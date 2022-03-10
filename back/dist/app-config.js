"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = exports.PORT = void 0;
exports.PORT = 3000;
exports.environment = {
    development: {
        serverURL: `http://localhost:${exports.PORT}`,
        dbString: "mongodb://localhost:27017/accache",
    },
};
//# sourceMappingURL=app-config.js.map
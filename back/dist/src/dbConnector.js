"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todos = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const app_config_1 = require("../app-config");
const model_1 = require("./todos/model");
mongoose_1.default.connect(app_config_1.environment.development.dbString);
const db = mongoose_1.default.createConnection();
db.on("error", () => {
    console.log("error while connecting to DB");
});
const Todos = mongoose_1.default.model("Todos", model_1.todoSchema);
exports.Todos = Todos;
//# sourceMappingURL=dbConnector.js.map
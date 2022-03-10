"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoSchema = void 0;
const mongoose = require("mongoose");
exports.todoSchema = new mongoose.Schema({
    id: { type: String },
    name: { type: String },
    status: { type: String },
});
//# sourceMappingURL=model.js.map
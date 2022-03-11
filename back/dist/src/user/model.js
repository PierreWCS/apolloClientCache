"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose = require("mongoose");
exports.userSchema = new mongoose.Schema({
    id: { type: String },
    firstname: { type: String },
    lastname: { type: String },
});
//# sourceMappingURL=model.js.map
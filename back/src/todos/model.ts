/** @format */

const mongoose = require("mongoose");

export const todoSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String },
  status: { type: String },
});

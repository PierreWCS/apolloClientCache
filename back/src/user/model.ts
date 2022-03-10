/** @format */

const mongoose = require("mongoose");

export const userSchema = new mongoose.Schema({
  id: { type: String },
  firstname: { type: String },
  lastname: { type: String },
});

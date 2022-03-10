/** @format */

import mongoose from "mongoose";
import { environment } from "../app-config";
import { todoSchema } from "./todos/model";

mongoose.connect(environment.development.dbString);

const db = mongoose.createConnection();

db.on("error", () => {
  console.log("error while connecting to DB");
});

const Todos = mongoose.model("Todos", todoSchema);

export { Todos };

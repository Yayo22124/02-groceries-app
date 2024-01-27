import app from "./app.js";
import database from "./database.js"
import dotenv from "dotenv";

dotenv.config({path: "src/.env"});

app.listen(process.env.SERVER_PORT, () => console.log(`Example app listening on port ${process.env.SERVER_PORT}! in http://localhost:${process.env.SERVER_PORT}`))
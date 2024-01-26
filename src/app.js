import express, { urlencoded } from "express";

import cors from "cors";
import morgan from "morgan";

const app = express()
const port = 3000
// * Settings 
// * Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({
    extended: false
}));

export default app;
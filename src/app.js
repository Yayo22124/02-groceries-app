import express, { urlencoded } from "express";

import cors from "cors";
import ejs from "ejs";
import morgan from "morgan";
import productsRouter from "./routes/products.routes.js"

// Instance of express
const app = express()
// * Settings 
app.set('view engine', ejs)
// * Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({
    extended: false
}));


const server_url = "/api/groceries/";
app.use(productsRouter);

export default app;
import express, { urlencoded } from "express";

import cors from "cors";
import morgan from "morgan";
import productsRouter from "./routes/products.routes.js"

// import ejs from "ejs";


const server_url = "/api/groceries/";
// Instance of express
const app = express()
// * Settings 
// app.set('view engine', ejs())
// * Middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
app.use(urlencoded({
    extended: false
}));
app.use(`${server_url}/products/`,productsRouter);

export default app;
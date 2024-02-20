import { get } from "mongoose";
import productDAO from "../dao/product.dao.js";

const productsController = {};

const getAll = (req,res) => {
   productDAO.getAll()
   .then( result =>
    res.json({
        products: result
    })
   )
   .catch(err => console.log(err));
}

const getOne = (req,res) => {
    const {barcode} = req.params;

   productDAO.getOne(barcode)
   .then( result =>
        result ? res.json({result}) : res.json({status: "Product not found"}) 
   )
   .catch(err => console.log(err));
}

const insertOne = async (req,res) => {
    const newProduct = req.body;

   await productDAO.insertOne(newProduct)
   .then( result =>
        res.json({status: "Product saved"}) 
   )
   .catch(err => console.log(err));
}

const updateOne = async (req,res) => {
    const updatedProduct = req.body;
    const {barcode} = req.params

   await productDAO.findOneAndUpdate(barcode, updatedProduct)
   .then( result =>
        result ? res.json({status: "Product succesfully updated."}) : res.json({status: "Product not found"}) 
   )
   .catch(err => console.log(err));
}

const deleteOne = async (req,res) => {
    const {barcode} = req.params

   await productDAO.findOneAndDelete(barcode)
   .then( result =>
        result ? res.json({status: "Product succesfully deleted."}) : res.json({status: "Product not found"}) 
   )
   .catch(err => console.log(err));
}

export  {
    getAll,
    getOne,
    insertOne,
    updateOne,
    deleteOne
};
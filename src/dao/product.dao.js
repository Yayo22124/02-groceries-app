import Product from "../models/products.model.js";

const productDAO = {};

productDAO.getAll = async () => {
    const products = await Product.find({});

    return products;
}

productDAO.getOne = async (barcode) => {
    const product = await Product.findOne({barcode});

    return product;
}

productDAO.insertOne = async (newProduct) => {
    const product = await Product.create(newProduct);

    return product;
}

productDAO.updateOne = async (barcode,updatedProduct) => {
    const product = await Product.updateOne({barcode},updatedProduct);
    return product;
}

productDAO.deleteOne = async (barcode) => {
    const product = await Product.deleteOne({barcode});
    return product;
}

export default productDAO;
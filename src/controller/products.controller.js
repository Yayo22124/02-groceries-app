const productsController = {};

productsController.getAll = (req,res) => {
    res.json({
        msg: "Hola Mundo desde Groceries API"
    })
}

export default productsController;
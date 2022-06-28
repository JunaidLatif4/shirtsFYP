const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    title: {
        type: String
    },
    category: {
        type: String
    },
    brand: {
        type: String
    },
    price: {
        type: String
    },
    quantity: {
        type: String
    },
    img: {
        type: Object
    }

})

module.exports = mongoose.model("ProductModel", productSchema);
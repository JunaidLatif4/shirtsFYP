const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "ProductModel"
        }
    ],
    address: {
        type: String
    },
    country: {
        type: String
    },
    quantity: {
        type: String
    },
    price: {
        type: String
    }

})

module.exports = mongoose.model("CartModel", cartSchema);
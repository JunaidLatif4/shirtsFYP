const mongoose = require("mongoose");

const paymentsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"
    },
    ammount: {
        type: String
    },
    status: {
        type: String
    }
})

module.exports = mongoose.model("PaymentsModel", paymentsSchema);
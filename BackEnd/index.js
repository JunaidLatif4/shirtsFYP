var express = require("express")
var cors = require("cors")
var env = require("dotenv")
const { default: mongoose } = require("mongoose")

const AuthRouter = require("./Routes/AuthRoute")
const ProductRouter = require("./Routes/ProductRoute")
const CartRouter = require("./Routes/CartRoute")

const app = express()

app.use(express.json())
app.use(cors())
env.config()

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("DataBase Connected");
}).catch((err) => {
    console.log("DataBase Connection Fail ==== ", err);
})

app.use('/hit', async (req, res) => {
    res.status(200).json({
        message: "Hited"
    })
})

app.use("/api/auth", AuthRouter)
app.use("/api/product", ProductRouter)
app.use("/api/cart", CartRouter)


app.listen(process.env.PORT, () => console.log("ServerStarted"))
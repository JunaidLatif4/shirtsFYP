const Router = require("express").Router()
const mongoose = require("mongoose")

const CartModel = require("../Models/CartModel")



Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const cart = await CartModel.findById(id)
            if (cart) {
                res.status(200).json({
                    message: "Cart Found Success",
                    data: cart
                })
            } else {
                res.status(401).json({
                    message: "Cart not Found"
                })
            }
        } else {
            const carts = await CartModel.find()
            if (carts) {
                res.status(200).json({
                    message: "All Carts Found Success",
                    data: carts
                })
            } else {
                res.status(401).json({
                    message: "All Carts not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting Carts",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { id, country } = req.query

    try {
        const cartData = await CartModel.create(req.body)
        await cartData.save()
        res.status(200).json({
            message: "Cart Create Success",
            data: cartData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Adding Cart",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            let updateCart = await CartModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updateCart) {
                res.status(200).json({
                    message: "Cart Update Success",
                    data: updateCart
                })
            } else {
                res.status(401).json({
                    message: "Cart not Found"
                })
            }
        } else {
            res.status(400).json({
                message: "Filed Missing",
                fields: ["ID"]
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Updating Cart",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteCart = await CartModel.findByIdAndDelete(id)
            if (deleteCart) {
                res.status(200).json({
                    message: "Cart Deleted Success",
                    data: deleteCart
                })
            } else {
                res.status(404).json({
                    message: "Cart not Found",
                })
            }
        } else {
            res.status(400).json({
                message: "Requried Fields Missing",
                fields: ["ID"]
            })
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Deleting Cart",
            error
        })
    }
})

module.exports = Router
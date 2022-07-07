const Router = require("express").Router()
const mongoose = require("mongoose")
const stripe = require('stripe')("sk_test_51LItchLoNvDBf5Y4aq5egMAyOmqroc8UBBrsZLFXEh8sIJpmX2pU0tFz8HOrwRLH7U7GZmqe18bdcOmbjFRv525p00WPK5lfhi")

const PaymentsModel = require("../Models/PaymentsModel")



Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const payment = await PaymentsModel.findById(id)
            if (payment) {
                res.status(200).json({
                    message: "payment Found Success",
                    data: payment
                })
            } else {
                res.status(401).json({
                    message: "payment not Found"
                })
            }
        } else {
            const payments = await PaymentsModel.find()
            if (payments) {
                res.status(200).json({
                    message: "All payments Found Success",
                    data: payments
                })
            } else {
                res.status(401).json({
                    message: "All payments not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting payments",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { id, country } = req.query

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            currency: 'USD',
            amount: 1999,
            automatic_payment_methods: { enabled: true }
        });

        // Send publishable key and PaymentIntent details to client
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Adding Payment",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            let updatePayment = await PaymentsModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updatePayment) {
                res.status(200).json({
                    message: "Payment Update Success",
                    data: updatePayment
                })
            } else {
                res.status(401).json({
                    message: "Payment not Found"
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
            message: "Internal Server Error at Updating Payment",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deletePayment = await PaymentsModel.findByIdAndDelete(id)
            if (deletePayment) {
                res.status(200).json({
                    message: "Payment Deleted Success",
                    data: deletePayment
                })
            } else {
                res.status(404).json({
                    message: "Payment not Found",
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
            message: "Internal Server Error at Deleting Payment",
            error
        })
    }
})

module.exports = Router
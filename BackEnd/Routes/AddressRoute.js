const Router = require("express").Router()
const mongoose = require("mongoose")

const AddressModel = require("../Models/AddressModel")



Router.get("/", async (req, res) => {
    const { id, user } = req.query

    try {
        if (id) {
            const address = await AddressModel.findById(id)
            if (address) {
                res.status(200).json({
                    message: "address Found Success",
                    data: address
                })
            } else {
                res.status(401).json({
                    message: "address not Found"
                })
            }
        } else if (user) {
            const userAddress = await AddressModel.findOne({ user: user })
            if (userAddress) {
                res.status(200).json({
                    message: "userAddress Found Success",
                    data: userAddress
                })
            } else {
                res.status(401).json({
                    message: "userAddress not Found"
                })
            }
        }
        else {
            const addresses = await AddressModel.find()
            if (addresses) {
                res.status(200).json({
                    message: "All addresses Found Success",
                    data: addresses
                })
            } else {
                res.status(401).json({
                    message: "All addresses not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting addresses",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { id, country } = req.query

    try {
        const addressData = await AddressModel.create(req.body)
        await addressData.save()
        res.status(200).json({
            message: "Address Create Success",
            data: addressData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Adding Address",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            let updateAddress = await AddressModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updateAddress) {
                res.status(200).json({
                    message: "Address Update Success",
                    data: updateAddress
                })
            } else {
                res.status(401).json({
                    message: "Address not Found"
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
            message: "Internal Server Error at Updating Address",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteAddress = await AddressModel.findByIdAndDelete(id)
            if (deleteAddress) {
                res.status(200).json({
                    message: "Address Deleted Success",
                    data: deleteAddress
                })
            } else {
                res.status(404).json({
                    message: "Address not Found",
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
            message: "Internal Server Error at Deleting Address",
            error
        })
    }
})

module.exports = Router
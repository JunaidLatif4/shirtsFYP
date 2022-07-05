const Router = require("express").Router()
const mongoose = require("mongoose")

const BrandModel = require("../Models/BrandModel")



Router.get("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            const brand = await BrandModel.findById(id)
            if (brand) {
                res.status(200).json({
                    message: "brand Found Success",
                    data: brand
                })
            } else {
                res.status(401).json({
                    message: "brand not Found"
                })
            }
        } else {
            const brands = await BrandModel.find()
            if (brands) {
                res.status(200).json({
                    message: "All brands Found Success",
                    data: brands
                })
            } else {
                res.status(401).json({
                    message: "All brands not Found"
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error at Getting brands",
            error
        })
    }
})

Router.post("/", async (req, res) => {
    const { id, country } = req.query

    try {
        const brandData = await BrandModel.create(req.body)
        await brandData.save()
        res.status(200).json({
            message: "Category Create Success",
            data: brandData
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal Server Error at Adding Category",
            error
        })
    }
})

Router.put("/", async (req, res) => {
    const { id, country } = req.query

    try {
        if (id) {
            let updateCategory = await BrandModel.findByIdAndUpdate(id, req.body, { new: true })
            if (updateCategory) {
                res.status(200).json({
                    message: "Category Update Success",
                    data: updateCategory
                })
            } else {
                res.status(401).json({
                    message: "Category not Found"
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
            message: "Internal Server Error at Updating Category",
            error
        })
    }
})

Router.delete("/", async (req, res) => {
    let { id } = req.query

    try {
        if (id) {
            let deleteCategory = await BrandModel.findByIdAndDelete(id)
            if (deleteCategory) {
                res.status(200).json({
                    message: "Category Deleted Success",
                    data: deleteCategory
                })
            } else {
                res.status(404).json({
                    message: "Category not Found",
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
            message: "Internal Server Error at Deleting Category",
            error
        })
    }
})

module.exports = Router
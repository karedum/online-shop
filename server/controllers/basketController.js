const {Basket} = require("../models/models");
const {Brand} = require('../models/models')
const ApiError = require('../error/ApiError')
const {User} = require('../models/models')
const {BasketDevice} = require('../models/models')
const {Device} = require('../models/models')

class basketController {

    async addProduct(req, res) {
        try {
            const basket = await Basket.findOne({where: {userId: req.user.id}})
            const device = await Device.findOne({where: {id: req.body.deviceId}})
            const result = await BasketDevice.create({basketId: basket.id, deviceId: device.id})
            return res.json(result)
        } catch (e) {
            console.log(e)
        }

    };

    async deleteProduct(req, res) {
        try {
            const {id} = req.params
            const basket = await Basket.findOne({where: {userId: req.user.id}})
            const device = await Device.findOne({where: {id: id}})
            const basketDevice = await BasketDevice.findOne({where: {basketId: basket.id, deviceId: device.id}})
            const result = await basketDevice.destroy()
            return res.json(result)
        } catch (e) {
            console.log(e)
        }
    };

    async getBasket(req, res, next) {
        try {
        const products = await Device.findAll({
            include: [{
                model: BasketDevice,
                include: [{
                    model: Basket,
                    where: {
                        userId: req.user.id
                    }
                }], required: true
            }]
        })
        return res.json(products)
        } catch (e) {
            console.log(e)
        }
    };

    async getBasketCount(req, res, next) {
        try {
        const products = await Device.count({
            include: [{
                model: BasketDevice,
                include: [{
                    model: Basket,
                    where: {
                        userId: req.user.id
                    }
                }], required: true
            }]
        })
        return res.json(products)
    } catch (e) {
        console.log(e)
    }
    };


}

module.exports = new basketController()
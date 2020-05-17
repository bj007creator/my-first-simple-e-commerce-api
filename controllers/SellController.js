
const SellServices = require("../services/SellServices");

module.exports = {
    sellProductFirstWay(req, res, next){
        const { purchase } = SellServices;
        purchase.byBoleto(req, res, next);
    },
    sellProductSecondWay(req, res, next){
        const { purchase } = SellServices;
        purchase.byCreditCard(req, res, next);
    }
}
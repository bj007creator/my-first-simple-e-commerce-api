const router = require("express").Router();

const EmailController = require("../controllers/EmailController");
const SellController = require("../controllers/SellController");

router.post("/email", EmailController.sendMail);

router.post("/buy/product/boleto", SellController.sellProductFirstWay);

router.post("/buy/product/creditcard", SellController.sellProductSecondWay);

module.exports = router;
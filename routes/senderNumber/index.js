const express = require("express");
const getSenderNumberMgtURLPromise = require("./getSenderNumberMgtURL");
const getSenderNumberListPromise = require("./getSenderNumberList");

const router = express.Router();

router.post("/register", async (req, res, next) => {
  const payload = req.body;

  try {
    const response = await getSenderNumberMgtURLPromise(payload);
    res.send(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.post("/list", async (req, res, next) => {
  const payload = req.body;

  try {
    const senderNumberList = await getSenderNumberListPromise(payload);
    console.log("발신번호 List: ", senderNumberList);
    const senderNumberObj = { ...senderNumberList };
    res.send(JSON.stringify(senderNumberObj));
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;

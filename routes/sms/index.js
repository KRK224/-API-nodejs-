const express = require("express");
const sendSMSPromise = require("./sendSMS");
const sendSMSMultiPromise = require("./sendSMSMulti");
const sendXMSPromise = require('./sendXMS');
const sendLMSPromise = require('./sendLMS');
const cancelReservePromise = require('./cancelReserve');

const router = express.Router();

router.post("/single", async (req, res, next) => {
  const payload = req.body;

  try {
    const response = await sendSMSPromise(payload);
    res.send(response);
  } catch (error) {
    next(new Error(error.messge));
  }
});

router.post("/multi", async (req, res, next) => {
  const payload = req.body;

  try {
    const response = await sendSMSMultiPromise(payload);
    res.send(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.post("/lms", async (req, res, next) => {
  const payload = req.body;

  try {
    const response = await sendLMSPromise(payload);
    res.send(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.post('/xms', async (req, res, next) =>{
  const payload = req.body;

  try {
    const response = await sendXMSPromise(payload);
    res.send(response);
  } catch(error) {
    next(new Error(error.message));
  }
});

router.post('/cancelReserve', async (req, res, next) =>{
  const payload = req.body;

  try {
    const response = await cancelReservePromise(payload);
    res.send(response);
  } catch(error) {
    next(new Error(error.message));
  }
});

module.exports = router;

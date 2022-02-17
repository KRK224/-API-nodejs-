const express = require("express");
const getMessagesPromise = require("./getMessages");
const searchPromise = require("./search");

const router = express.Router();

router.post("/search", async (req, res, next) => {
  const payload = req.body;

  try {
    const response = await searchPromise(payload);
    res.send(response.list);
  } catch (error) {
    next(new Error(error.message));
  }
});

router.post("/messages", async (req, res, next) => {
  const payload = req.body;

  try {
    const response = await getMessagesPromise(payload);
    res.send(response);
  } catch (error) {
    next(new Error(error.message));
  }
});

module.exports = router;

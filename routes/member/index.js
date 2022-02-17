const express = require("express");
const joinMemberPromise = require('./joinMember');

const router = express.Router();

router.post(
  "/joinMember",
  async (req, res, next) => {
    const payload = req.body;
      try {
        const { JoinInfo } = payload;
        const response = await joinMemberPromise(JoinInfo);
        res.send(response);
      } catch (error) { 
        next(new Error(error.message));
      }
  }
);

module.exports = router;

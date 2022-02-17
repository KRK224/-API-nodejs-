const messagePopbill = require("../../api/message");

const getSenderNumberListPromise = (payload) => {
  return new Promise((resolve, reject) => {
    const { CorpNum, UserID } = payload;
    messagePopbill.getSenderNumberList(CorpNum, UserID, resolve, reject);
  });
};

module.exports = getSenderNumberListPromise;
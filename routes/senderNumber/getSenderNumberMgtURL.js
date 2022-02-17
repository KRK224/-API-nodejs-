const messagePopbill = require("../../api/message");

const getSenderNumberMgtURLPromise = (payload) => {
  return new Promise((resolve, reject) => {
    const { CorpNum, UserID } = payload;
    messagePopbill.getSenderNumberMgtURL(CorpNum, UserID, resolve, reject);
  });
};

module.exports = getSenderNumberMgtURLPromise;
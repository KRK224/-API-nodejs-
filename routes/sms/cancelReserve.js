const messagePopbill = require("../../api/message");

const cancelReservePromise = (payload) =>{
  return new Promise((resolve, reject) =>{
    const {
      CorpNum,
      ReceiptNum
    } = payload;

    messagePopbill.cancelReserve(CorpNum, ReceiptNum, resolve, reject);

  });
};

module.exports = cancelReservePromise;

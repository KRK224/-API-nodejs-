const messagePopbill = require("../../api/message");

const getMessagesPromise = (payload) =>{
  return new Promise((resolve, reject) =>{
    const {
      CorpNum,
      ReceiptNum
    } = payload;

    const success = (response) =>{
      return resolve(response);
    };

    const error = (err) =>{
      return reject(err);
    };

    messagePopbill.getMessages(CorpNum, ReceiptNum, success, error);
  });
};

module.exports = getMessagesPromise;
const messagePopbill = require("../../api/message");

const sendLMSPromise = (payload) =>{
  return new Promise((resolve, reject) =>{
    const {
      CorpNum,
      Sender,
      Receiver,
      ReceiverName,
      Subject,
      Contents,
      reserveDT
    } = payload;
    
    const success = (response) =>{
      return resolve(response);
    };
    const error = (err) =>{
      return reject(err);
    };

    messagePopbill.sendLMS(CorpNum,	Sender,	Receiver,	ReceiverName,	Subject,	Contents,	reserveDT, success, error);
  });
};

module.exports = sendLMSPromise;
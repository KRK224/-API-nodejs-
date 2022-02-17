const messagePopbill = require("../../api/message");

const sendXMSPromise = (payload) =>{
  return new Promise((resolve, reject)=>{
    
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

    messagePopbill.sendXMS(CorpNum,	Sender,	Receiver,	ReceiverName,	Subject,	Contents,	reserveDT, success, error);
  });
};

module.exports = sendXMSPromise;
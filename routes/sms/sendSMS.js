const messagePopbill = require("../../api/message");

const sendSMSPromise = (payload) => {
  return new Promise((resolve, reject)=> {
    const {CorpNum, Sender, Receiver, ReceiverName, Contents, reserveDT} = payload;

    const success = (response) =>{
      return resolve(response);
    };

    const error = (err) => {
      return reject(err);
    };

    messagePopbill.sendSMS(CorpNum, Sender, Receiver, ReceiverName, Contents, reserveDT, success, error);
  });
};

module.exports = sendSMSPromise;

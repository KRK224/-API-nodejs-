const messagePopbill = require("../../api/message");

const sendSMSMultiPromise = (payload) =>{
  return new Promise ((resolve, reject)=>{
    const {CorpNum, Sender, Messages, Contents, reserveDT} = payload;
    const messages = JSON.parse(Messages);

    const success = (response) =>{
      return resolve(response);
    };

    const error = (err) =>{
      return reject(err);
    };

    messagePopbill.sendSMS_multi(CorpNum, Sender, Contents, messages, reserveDT, success, error);
  })
};

module.exports = sendSMSMultiPromise;
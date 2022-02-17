const messagePopbill = require("../../api/message");

const searchPromise = (payload) =>{
  return new Promise ((resolve, reject) =>{
    const {
      CorpNum,
      SDate,
      EDate,
      State,
      Item,
      ReserveYN,
      SenderYN,
      Order,
      Page,
      PerPage,
      QString
    } = payload;
    
    
    const state = JSON.parse(State)
    // console.log(state);

    const item = JSON.parse(Item);
    // console.log(item);

    const success = (response) =>{
      return resolve(response);
    };

    const error = (err) =>{
      return reject(err);
    };

    messagePopbill.search(CorpNum, SDate, EDate, state, item, ReserveYN, SenderYN, Order, Page, PerPage, QString, success, error);
  });
};

module.exports = searchPromise;
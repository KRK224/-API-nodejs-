const messagePopbill = require("../../api/message");

const joinMemberPromise = (JoinInfo) => {
  return new Promise((resolve, reject) => {
    messagePopbill.joinMember(JoinInfo, resolve, reject);
  });
};

module.exports = joinMemberPromise;
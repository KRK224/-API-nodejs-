const popbill = require('popbill');
const dotenv = require('dotenv');

dotenv.config();

const LINKID = process.env.LINKID;
const SECRETKEY = process.env.SECRETKEY;

popbill.config({

  // 링크허브에서 발급받은 링크아이디, 비밀키
  LinkID: LINKID,
  SecretKey: SECRETKEY,

  // 연동환경 설정값, (true-개발용, false-상업용)
  IsTest: true,

  // 인증토큰 IP제한기능 사용여부, 권장(true)
  IPRestrictOnOff: true,

  useLocalTimeYN: true,

  defaultErrorHandler: function (Error) {
      console.log('Error Occur : [' + Error.code + '] ' + Error.message);
  }
});

const messageService = popbill.MessageService();

module.exports = messageService;
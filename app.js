const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { memberRouter, senderNumberRouter, smsRouter, informRouter } = require('./routes');
// const memberRouter = require('./routes/member');
// const senderNumberRouter = require('./routes/senderNumber');
// const smsRouter = require('./routes/sms');


const app =express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.raw());

app.get('/', (req,res) => {
  res.send('Hello, Express');
});

app.use('/member', memberRouter);
app.use('/senderNumber', senderNumberRouter);
app.use('/sms', smsRouter);
app.use('/inform', informRouter);

app.use((err, req, res) => {
  res.status(400).send(err.message);
});

app.listen(app.get('port'), () =>{
  console.log(app.get('port'), '번 포트에서 대기 중...');
});
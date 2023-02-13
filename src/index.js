const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config');
const {sendEmail} = require('./services/email-service');

const app = express();

const startServer = ()=>{
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>{
        console.log('Servre is running on port no: '+PORT);
        sendEmail('support@admin.com',
        'anuragpandey8469@gmail.com',
        'This is for Testing email',
        'Hello anurag how are you I hope you are doing very well');
    });
}

startServer();
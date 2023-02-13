const express = require('express');
const bodyParser = require('body-parser');
const {PORT} = require('./config/server-config');


const app = express();

const startServer = ()=>{
    app.use(bodyParser.json);
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,()=>{
        console.log('Servre is running on port no: '+PORT);
    });
}

startServer();
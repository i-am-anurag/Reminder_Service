// const express = require('express');
// const bodyParser = require('body-parser');
// const {PORT} = require('./config/server-config');
// const TicketController = require('./controller/ticket-controller');
// const {sendEmail} = require('./services/email-service');
// const jobs = require('./utils/job');

// const apiroutes = require('./routes/index');


// const startServer = ()=>{
//     const app = express();
//     app.use(bodyParser.json);
//     app.use(bodyParser.urlencoded({extended: true}));
//     app.use('/api',apiroutes);

//     app.listen(PORT,()=>{
//         console.log('Servre is running on port no: '+PORT);
//         // sendEmail('support@admin.com',
//         // 'anuragpandey8469@gmail.com',
//         // 'This is for Testing email',
//         // 'Hello anurag how are you I hope you are doing very well');
//     });
// }

// startServer();


const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/server-config');

// const { sendBasicEmail } = require('./services/email-service');
const TicketController = require('./controller/ticket-controller');

const jobs = require('./utils/job');

const setupAndStartServer = () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/tickets', TicketController.create);

    app.listen(PORT, () => {
        console.log(`Server started at port ${PORT}`);
        jobs();
        // sendBasicEmail(
        //     'support@admin.com',
        //     'moviebookingappservice@gmail.com',
        //     'This is a testing email',
        //     'Hey, how are you, I hope you like the support'
        // );
              
    });
}

setupAndStartServer();
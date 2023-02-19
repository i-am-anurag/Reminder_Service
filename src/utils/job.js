const cron = require('node-cron');
const emailService = require('../services/email-service');
const sender = require('../config/emailConfing');

const setupJobs = () => {
    cron.schedule('*/1 * * * *',async()=> {
       const response = await emailService.fetchPendingEmails();
       response.forEach((email) => {
        sender.sendMail({
            to: email.reciepentEmail,
            subject: email.subject,
            text: email.content,  
        },async (err,data) => {
            if(err) {
                console.error(err);
            }
            else{
                console.log(data);
                await emailService.updateStatus(email.id, {status: 'SUCESS'})
            }
        })
       });
       console.log(response);
    });
};

module.exports = setupJobs;
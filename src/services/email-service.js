const sender = require('../config/emailConfing');

const sendEmail = async (mailFrom,mailTo,mailSubject,mailBody) => {
    try {
        const response = await sender.sendMail({
            from: mailFrom,
            to: mailTo,
            subject: mailSubject,
            text: mailBody,  
        });
                
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    sendEmail,
}
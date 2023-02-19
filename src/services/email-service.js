const sender = require('../config/emailConfing');
const TicketRepository = require('../repository/ticket');

const repo = new TicketRepository();

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

const fetchPendingEmails = async (timestamp) => {
    try {
        const response = await repo.get({status:"PENDING"});

        return response;   
    } catch (error) {
        console.log(error);
        throw error;
    }
}

const updateStatus = async (ticketId,data)=>{
    try {
        const response = await repo.update(ticketId,data);

        return response;
    } catch (error) {
        
    }
}

const createNotification = async (data)=> {
    try {
        console.log('Request is comming in Service');
        const response = await repo.create(data);

        return response;
    } catch (error) {
        console.log(error);

        throw error;
    }
}

module.exports = {
    sendEmail,
    fetchPendingEmails,
    createNotification,
    updateStatus
}
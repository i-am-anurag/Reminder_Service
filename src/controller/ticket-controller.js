const TicketService = require('../services/email-service');

const create = async(req,res) => {
    try {
        console.log('Request is comming in controller');
        const result = await TicketService.createNotification(req.body);

        return res.status(201).json({
            success: true,
            data:result,
            message:"Successfully registered email for notification",
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            data:result,
            message:"there is an error to create email for notification",
            error: error,
        });
    }
}



module.exports = {
    create,
}
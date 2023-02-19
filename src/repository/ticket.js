const {NotificationTicket} = require('../models/index');
const { Op } = require("sequelize");

class TicketRepository{
    async getAll() {
        try {
            const Ticket = await NotificationTicket.findAll();

            return Ticket;
        }
        catch(err) {
            throw err;
        }
    }

    async create(data){
        try {
            console.log('Request is comming in repository');
            const Ticket = await NotificationTicket.create(data);

            return Ticket;
        } catch (error) {
            console.log(error);

            throw error;
        }
    }

    async get(filter){
        try {
            const tickets = await NotificationTicket.findAll({
                where: {
                    status:filter.status,
                    notificationTime:{
                        [Op.lte]: new Date()
                    }
                }
            });

            return tickets;
        } catch (error) {
            console.log(error);
        }
    }

    async update(ticketsId,data){
        try {
            const ticket = await NotificationTicket.findByPk(ticketsId);
            if(data.status)
                ticket.status = data.status;
            await ticket.save();

            return ticket;
        } catch (error) {

        }
    }
}

module.exports = TicketRepository;
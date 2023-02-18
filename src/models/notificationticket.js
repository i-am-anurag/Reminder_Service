'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NotificationTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NotificationTicket.init({
    subject: {
      type:DataTypes.STRING
    },
    content:  {
      type:DataTypes.STRING
    },
    reciepentEmail:  {
      type:DataTypes.STRING
    },
    status: {
      type:DataTypes.ENUM,
      values:["SUCESS","PENDING","FAILED"],
      defaultValue:"PENDING",
    },
    notificationTime: {
      type:DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'NotificationTicket',
  });
  return NotificationTicket;
};
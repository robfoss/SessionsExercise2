'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Lead extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Lead.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
    }
  };
  Lead.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Lead',
  });
  return Lead;
};
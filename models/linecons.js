'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class linecons extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({consultation}) {
    this.belongsTo(consultation,{foreignKey:'consid'})
    }
  };
  linecons.init({
    type: DataTypes.STRING,
    vers:DataTypes.DOUBLE,
    consid:DataTypes.INTEGER

  },

  
  
  
  {
    sequelize,
    modelName: 'linecons',
  });
  return linecons;
};
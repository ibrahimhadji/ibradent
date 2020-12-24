'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consultation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({pat,linecons}) {
      // define association here
      this.belongsTo(pat,{foreignKey:'userid'});
      this.hasMany(linecons,{foreignKey:'consid'})
    }
  };
  consultation.init({
   
    uuid: {
      type:DataTypes.STRING,
      defaultValue:DataTypes.UUIDV4
      
    },
    userid:DataTypes.INTEGER,
    type: DataTypes.STRING,
    rdv: DataTypes.DATE,
    total: DataTypes.DOUBLE,
    vers: DataTypes.DOUBLE,
    rest: DataTypes.DOUBLE,
    obs: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'consultation',
  });
  return consultation;
};
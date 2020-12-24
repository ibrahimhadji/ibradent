'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({consultation}) {
      // define association here
      this.hasMany(consultation,{foreignKey:'userid'})
    }
    /*toJSON(){
      return{...this.get(),id:undefined};
    }*/
  };
  pat.init({
    uuid: {
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
      
    },
    nom: DataTypes.STRING,
    prenom: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sexe: DataTypes.STRING,
    numero: DataTypes.STRING,
    maladiechr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pat',
  });
  return pat;
};
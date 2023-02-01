const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id:{
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    imgFlag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
    capital:{
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'no capital'
    },

    continent:{
      type: DataTypes.STRING,
      allowNull: false
    },

    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    area: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    population:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }

  },{
    timestamps: false
  });
};

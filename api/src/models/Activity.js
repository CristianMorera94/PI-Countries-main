const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
    sequelize.define('activity', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        difficulty: {
            type: DataTypes.INTEGER,
            validate: { max: 5, min: 1},
        },

        time: {
            type: DataTypes.STRING,
        },

        season: {
            type: DataTypes.ENUM('Summer', 'Autumn', 'Winter', 'Spring'),
        },
        createInDb:{
            type: DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:true,
        }, 
    })
};
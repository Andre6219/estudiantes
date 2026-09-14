const {DataTypes} = require('sequelize');
const sequelize = require('../config/database');

const estudiante = sequelize.define('estudiante', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type:DataTypes.STRING(150),
        allowNull: false
    },
        escuela: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    nota: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
tableName: 'estudiantes',
timestamps: false,
});
 module.exports = estudiante;
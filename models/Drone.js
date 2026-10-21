const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Drone = db.define('drone',{
    codDrone:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    idCliente:{
        type: DataTypes.INTEGER,
        references:{
            model:'clientes',
            key: 'codCliente'
        },
        allowNull: false
    },
    modelo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    marca:{
        type: DataTypes.STRING,
        allowNull: false
    },
    numSerie:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    tipoServico:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'drones'
})
module.exports = Drone
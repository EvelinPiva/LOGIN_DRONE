const {DataTypes} = require('sequelize')
const db = require('../db/conn')

const Agendamento = db.define('agendamento',{
    codAgendamento:{
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
    idDrone:{
        type: DataTypes.INTEGER,
        references:{
            model:'drones',
            key: 'codDrone'
        },
        allowNull: false
    },
    dataHora:{
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'agendamentos'
})
module.exports = Agendamento
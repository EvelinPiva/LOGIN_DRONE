const Drone = require('../models/Drone')
const Cliente = require('../models/Cliente')

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.modelo || !valores.marca || !valores.numSerie || !valores.idCliente || !valores.tipoServico) {
        return res.status(400).json({ message: 'Todos os campos (modelo, tipo, aro, idCliente) são obrigatórios!' })
    }

    try {
        const cliente = await Cliente.findByPk(valores.idCliente)
        if (!cliente) {
            return res.status(404).json({ message: 'cliente informado não existe!' })
        }

        const novoDrone = await Drone.create(valores)
        return res.status(201).json({ message: 'Drone cadastrado com sucesso!', drone: novoDrone })
    } catch (err) {
        console.error('Erro ao cadastrar Drone:', err)
        return res.status(500).json({ message: 'Erro ao cadastrar Drone!' })
    }
}

module.exports = { cadastrar }
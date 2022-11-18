import Partido from '../models/partidos.js'
import Pronostico from '../models/pronostico.js'
import Usuario from '../models/usuarios.js'

export async function createPronostico (req, res) {
  try {
    const { idPartido, idUsuario, golesLocal, golesVisita } = req.body

    const existPartido = await Pronostico.findOne({ usuario: idUsuario, partido: idPartido })

    console.log(existPartido)

    if (existPartido) return res.status(401).send('Ya apostaste a este')

    const partido = await Partido.findById(idPartido)
    const usuario = await Usuario.findById(idUsuario)

    const pronostico = new Pronostico({
      partido: partido._id,
      usuario: usuario._id,
      golesLocal,
      golesVisita
    })

    const savedPronostico = await pronostico.save()

    return res.status(200).send(savedPronostico)
  } catch (error) {
    return res.status(500).send(error)
  }
}

export async function updatePronostico (req, res) {
  try {
    const { golesLocal, golesVisita } = req.body
    const { id } = req.params
    const updatedPronostico = await Pronostico.findByIdAndUpdate(id, { golesLocal, golesVisita }, { new: true })

    return res.status(200).send(updatedPronostico)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
}

export async function pronosticos (req, res) {
  try {
    const pronosticos = await Pronostico.find()

    return res.status(200).send(pronosticos)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
}

export async function getPronostico (req, res) {
  try {
    const pronostico = await Pronostico.findById(req.params.id)

    return res.status(200).send(pronostico)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
}

import Equipos from '../models/equipo.js'

export async function createEquipo (req, res) {
  try {
    const { nombre, imagen } = req.body

    const newEquipo = new Equipos({
      nombre,
      imagen
    })

    const equipoSaved = await newEquipo.save()

    res.status(201).json(equipoSaved)
  } catch (error) {
    console.error(error)
  }
}

export async function getEquipos (req, res) {
  try {
    const equipos = await Equipos.find()
    return res.status(200).send(equipos)
  } catch (error) {
    console.error(error)
  }
}

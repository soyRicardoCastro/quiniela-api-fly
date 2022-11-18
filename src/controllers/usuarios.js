import Usuarios from '../models/usuarios.js'
import { uploadImage } from '../utils/cloudinary.js'

export const signupHandler = async (req, res) => {
  try {
    const { username, email, password, imagen, alias } = req.body
    const newUser = new Usuarios({
      username,
      email,
      password
    })

    if (alias !== '') newUser.alias = alias

    if (imagen !== '') {
      const img = await uploadImage(imagen)
      newUser.imagen = img.secure_url
    }

    const savedUser = await newUser.save()

    return res.status(200).send(savedUser)
  } catch (error) {
    console.error(error)
    return res.status(400).send(error.message)
  }
}

export const signinHandler = async (req, res) => {
  try {
    const { email, password } = req.body

    const userFound = await Usuarios.findOne({ email })

    if (!userFound) return res.status(404).json({ message: 'User Not Found' })

    const matchPassword = await Usuarios.comparePassword(
      password,
      userFound.password
    )

    if (!matchPassword) {
      return res.status(401).json({
        message: 'Invalid Password'
      })
    }

    res.status(200).send(userFound)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}
export async function getUsuarios (req, res) {
  try {
    const usuarios = await Usuarios.find()
    const { alias } = req.params

    const filteredUsers = usuarios.filter(usuario => usuario.alias === alias)

    return res.status(200).send(filteredUsers)
  } catch (error) {
    console.error(error)
  }
}

export async function getUsuario (req, res) {
  try {
    const usuario = await Usuarios.findById(req.params.id)

    return res.status(200).send(usuario)
  } catch (error) {
    console.error(error)
  }
}

export async function updateUsuario (req, res) {
  try {
    const { username, imagen } = req.body

    if (imagen || imagen !== '') {
      const img = await uploadImage(imagen)
      const userUpdated = await Usuarios.findByIdAndUpdate(
        req.params.id,
        { imagen: img.secure_url, username },
        { new: true }
      )

      return res.status(200).send(userUpdated)
    }

    const userUpdated = await Usuarios.findByIdAndUpdate(
      req.params.id,
      { username },
      { new: true }
    )

    return res.status(200).send(userUpdated)
  } catch (error) {
    console.error(error)
    return res.status(500).send(error)
  }
}

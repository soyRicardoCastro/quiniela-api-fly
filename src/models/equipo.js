import { model, Schema } from 'mongoose'

const equiposSchema = new Schema(
  {
    nombre: String,
    imagen: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

export default model('Equipos', equiposSchema)

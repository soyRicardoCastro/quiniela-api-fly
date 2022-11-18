import { model, Schema } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const pronosticoSchema = new Schema(
  {
    partido: {
      type: Schema.Types.ObjectId,
      ref: 'Partidos',
      autopopulate: true
    },
    usuario: {
      type: Schema.Types.ObjectId,
      ref: 'Usuarios'
    },
    golesLocal: {
      type: Number,
      default: 0
    },
    golesVisita: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
pronosticoSchema.plugin(autopopulate)

export default model('Pronostico', pronosticoSchema)

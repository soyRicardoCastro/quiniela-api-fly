import { model, Schema } from 'mongoose'
import autopopulate from 'mongoose-autopopulate'

const partidosSchema = new Schema(
  {
    equipoLocal: {
      type: Schema.Types.ObjectId,
      ref: 'Equipos',
      autopopulate: true
    },
    equipoVisita: {
      type: Schema.Types.ObjectId,
      ref: 'Equipos',
      autopopulate: true
    },
    golesLocal: {
      type: Number,
      default: 0
    },
    golesVisita: {
      type: Number,
      default: 0
    },
    status: {
      type: Boolean,
      default: true
    },
    isFinish: {
      type: Boolean,
      default: false
    },
    isPlaying: {
      type: Boolean,
      default: false
    },
    date: {
      type: String,
      default: ''
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)
partidosSchema.plugin(autopopulate)

partidosSchema.statics.updatePuntos = async () => {

}

partidosSchema.pre('update', async function (next) {
  next()
})

export default model('Partidos', partidosSchema)

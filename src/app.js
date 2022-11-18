import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'

import equiposRoutes from './routes/equipos.js'
import partidosRoutes from './routes/partidos.js'
import pronosticoRoutes from './routes/pronostico.js'
import authRoutes from './routes/usuarios.js'

dotenv.config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json({ limit: '50mb' }))

app.use('/', equiposRoutes)
app.use('/', partidosRoutes)
app.use('/', authRoutes)
app.use('/', pronosticoRoutes)

export default app

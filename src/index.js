import dotenv from 'dotenv'
import app from './app.js'
import './db.js'

dotenv.config()

app.listen(process.env.PORT, () => console.log('running', +process.env.PORT))

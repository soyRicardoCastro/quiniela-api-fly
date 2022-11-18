import { Router } from 'express'
import { getUsuario, getUsuarios, signinHandler, signupHandler, updateUsuario } from '../controllers/usuarios.js'

const router = Router()

router.post('/api/login', signinHandler)
router.post('/api/register', signupHandler)
router.get('/api/leaderboard/:alias', getUsuarios)
router.get('/api/usuarios/:id', getUsuario)
router.put('/api/usuarios/:id', updateUsuario)

export default router

import { Router } from 'express'
import { createEquipo, getEquipos } from '../controllers/equipos.js'

const router = Router()

router.post('/api/equipos', createEquipo)
router.get('/api/equipos', getEquipos)

export default router

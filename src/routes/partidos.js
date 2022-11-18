import { Router } from 'express'
import { createPartido, getPartido, getPartidos, updatePartido, updateGoles, updateDate, startedGame } from '../controllers/partido.js'

const router = Router()

router.put('/api/started/:id', startedGame)

router.post('/api/partidos', createPartido)

router.put('/api/partidos/:id', updatePartido)

router.put('/api/partidos/goles/:id', updateGoles)

router.get('/api/partidos', getPartidos)

router.get('/api/partidos/:id', getPartido)

router.put('/api/date/:id', updateDate)

export default router

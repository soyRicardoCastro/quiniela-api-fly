import { Router } from 'express'
import { createPartido, finishPartido, getPartido, getPartidos, updateDate, updatePartidp } from '../controllers/partido.js'

const router = Router()

router.post('/api/partidos', createPartido)

router.get('/api/partidos', getPartidos)

router.get('/api/partidos/:id', getPartido)

router.put('/api/date/:id', updateDate)

router.put('/api/updatePartido/:id', updatePartidp)

router.put('/api/finishPartido:id', finishPartido)

export default router

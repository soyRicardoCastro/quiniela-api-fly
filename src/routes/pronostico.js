import { Router } from 'express'
import { createPronostico, getPronostico, pronosticos, updatePronostico } from '../controllers/pronostico.js'

const router = Router()

router.post('/api/pronostico', createPronostico)

router.get('/api/pronosticos', pronosticos)

router.get('/api/pronostico/:id', getPronostico)
router.put('/api/updatePronostico/:id', updatePronostico)

export default router

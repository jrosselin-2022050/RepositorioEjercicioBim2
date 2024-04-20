import { Router } from 'express'
import { convertDate } from './conversions.controller.js'

const api = Router()

api.post('/', convertDate)

export default api

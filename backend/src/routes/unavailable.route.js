import { Router } from 'express'

import { 
    editResponse
 } from '../controllers/unavailable.controller.js'

export const unavailableRouter = Router()


unavailableRouter.put('/:id', editResponse)
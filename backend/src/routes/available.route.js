import { Router } from 'express'

import { 
    editResponse
 } from '../controllers/available.controller.js'

export const availableRouter = Router()


availableRouter.put('/:id', editResponse)
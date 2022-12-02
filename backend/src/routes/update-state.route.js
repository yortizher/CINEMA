import { Router } from 'express'

import { 
    editResponse
 } from '../controllers/update-state.controller.js'

export const updateStateRouter = Router()


updateStateRouter.put('/:id', editResponse)
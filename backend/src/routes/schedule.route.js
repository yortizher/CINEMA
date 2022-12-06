import { Router } from 'express'

import { 
    getResponses,
    scheduleById,
    createSchedule,
    deleteSchedule,
    editSchedule
 } from '../controllers/schedule.controller.js'

export const scheduleRouter = Router()

scheduleRouter.get('/', getResponses)
scheduleRouter.get('/:id', scheduleById)
scheduleRouter.post('/', createSchedule)
scheduleRouter.delete('/:id', deleteSchedule)
scheduleRouter.put('/:id', editSchedule)
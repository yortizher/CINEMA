import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/category.controller.js'

export const categoryRouter = Router()

categoryRouter.get('/', getResponses)
categoryRouter.get('/:id', responseById)
categoryRouter.post('/', upload.none(), createResponse)
categoryRouter.delete('/:id', deleteResponse)
categoryRouter.put('/:id',upload.none(), editResponse)
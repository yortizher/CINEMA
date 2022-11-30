import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/movie.controller.js'

export const movieRouter = Router()

movieRouter.get('/', getResponses)
movieRouter.get('/:id', responseById)
movieRouter.post('/', upload.none(),  createResponse)
movieRouter.delete('/:id', deleteResponse)
movieRouter.put('/:id', upload.none(),  editResponse)
import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    getResponses,
    responseById,
    createResponse,
    deleteResponse,
    editResponse
 } from '../controllers/room.controller.js'

export const roomRouter = Router()

roomRouter.get('/', getResponses)
roomRouter.get('/:id', responseById)
roomRouter.post('/', upload.none(),  createResponse)
roomRouter.delete('/:id', deleteResponse)
roomRouter.put('/:id', upload.none(),  editResponse)
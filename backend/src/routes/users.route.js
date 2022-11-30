import { Router } from 'express'
import multer  from 'multer'
const upload = multer()
import { 
    user,
    userById,
    createUser,
    deleteUSer,
    editUser
 } from '../controllers/user.controller.js'

export const userRouter = Router()

userRouter.get('/', user)
userRouter.get('/:id', userById)
userRouter.post('/', upload.none(),  createUser)
userRouter.delete('/:id', deleteUSer)
userRouter.put('/:id', upload.none(),  editUser)
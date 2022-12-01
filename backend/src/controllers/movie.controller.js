import { Category } from '../models/category.model.js';
import  { Movie } from '../models/movie.model.js'
import { cloudinary } from "../helpers/helper.js"

export const getResponses = async (req,res) => {
    try{
        const list = await Movie.findAll({ include: [{ model: Category }] })
        res.status(200).json(list)
    }catch(err){
        console.log(err);
    }
}

export const responseById = async (req,res) => {
    const { id } = req.params
    try{
        const itemId = await Movie.findOne({
            include: [{ model: Category }], 
            where: {
              id,
            },
          });
          
        if (itemId) {
            res.status(200).json(itemId);
        } else {
            res.status(404).json({message: "No existen registros con ese ID"});
        }
        
    }catch(err){
        res.status(500).json({
            message: err,
          });
    }
}

export const createResponse = async  (req,res) => {

    try {
    
        const  {tempFilePath:fileStr}  = req.files.image_url

        const { name, category_id, duration, synopsis, age_range } = req.body
        
        const uploadResponse = await cloudinary.uploader.upload( fileStr, { upload_preset: "pets_folder" })
    

    const createRegister = await Movie.create({
        name, category_id,image: uploadResponse.secure_url, duration, synopsis, age_range
    })

    res.status(200).json({message: "Register was created succesfully", createRegister})

    } catch (error) {
        console.error(error)
    }
    
}

export const deleteResponse = async (req,res) => {
    const { id } = req.params
    try{
        const deleteOne =  await Movie.destroy({
            where: {
                id
            }
        })
        
         if (deleteOne) {
            res.status(200).json({message: `Register with id:${id} was succesfully removed`})
        } else {
            res.status(404).json({message: "No existen registros con ese ID"});
        }
       }catch(err){
            console.error(err)
       }
}

export const editResponse = async (req,res) => {
    
    const { id } = req.params
    try {

        const { name, category_id, image, duration, synopsis, age_range } = req.body
    
        const editRegister = await Movie.findByPk(id)

        if (editRegister) {

            editRegister.name = name
            editRegister.category_id = category_id 
            editRegister.image = image 
            editRegister.duration = duration
            editRegister.synopsis = synopsis
            editRegister.age_range = age_range
            await editRegister.save()
        
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            res.status(404).json({error: "No existen registros con ese ID"})
        }
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}

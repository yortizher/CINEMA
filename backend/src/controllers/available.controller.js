import  { Room } from '../models/room.model.js'


export const editResponse = async (req,res) => {
    
    const { id } = req.params
    try {

        const { data } = req.body

        
            const searchByid = await Room.findOne({
                where: {
                    id
                }
            })

            const resData = searchByid.seats_distribution
            const conv = data.split(/\s+/);
           
            const result = (arr) => arr.map(element => {
                const ticket = conv.find(item => item === element.ID)
                if(ticket === element.ID) {
                    element["State"] = "Available"
                }
                return {
                    ...element
                }
            } )

        const editRegister = await Room.findByPk(id)

        if (data) {
            editRegister.seats_distribution = result(resData)
            await editRegister.save()
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
        } else {
            res.status(500).json({error: `Los campos no pueden estar vacíos o ser inválidos. Envia el ID de los asientos que cambiarán a 'Unavailable'`})
        }
           
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}

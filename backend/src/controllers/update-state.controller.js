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

            const result = arr => arr.map(element => {
                const ticket = data.find(item => item === element.ID)
                if(ticket === element.ID) {
                    element["State"] = "Unavailable"
                }
                return {
                    ...element
                }
            } )

        const editRegister = await Room.findByPk(id)

            editRegister.seats_distribution = result(resData)
            await editRegister.save()
            res.status(200).json({message: `Register with id:${id} was succesfully edited`, editRegister})
       
      } catch (err) {
        return res.status(500).json({ message: err})
      }
}

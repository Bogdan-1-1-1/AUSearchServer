import mongoose from 'mongoose'

const NeuroValuesSchema = new mongoose.Schema(
    {
        gamename: {
            type: String, 
            unique: true,
        },
        values:  {
            type: Array, 
            contains: {
                type: Number 
            }
        }
    }
)
const values = mongoose.model("NeuroValues", NeuroValuesSchema)

export default values
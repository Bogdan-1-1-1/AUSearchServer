import mongoose from 'mongoose'

const Fire_sampleSchema = new mongoose.Schema(
    {
        gamename: {
            type: String,
        },
        filename: {
            type: String,
        },
        sample:  {
            type: Array, 
            contains: {
                type: Number 
            }
        }
    }
)
const Fire_sample = mongoose.model("Fire_sample", Fire_sampleSchema)

export default Fire_sample
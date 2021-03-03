import mongoose from 'mongoose'

const Explosion_sampleSchema = new mongoose.Schema(
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
const Explosion_sample = mongoose.model("Explosion_sample", Explosion_sampleSchema)

export default Explosion_sample
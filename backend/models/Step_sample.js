import mongoose from 'mongoose'

const Step_sampleSchema = new mongoose.Schema(
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
const Step_sample = mongoose.model("Step_sample", Step_sampleSchema)

export default Step_sample
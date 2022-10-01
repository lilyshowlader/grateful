import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({

  description: String,
  date: Date,
  goalMet: Boolean,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}

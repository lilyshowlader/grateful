import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({

  goalDescription: String,
  date: Date,
  goalMet: Boolean,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}

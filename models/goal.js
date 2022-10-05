import mongoose from 'mongoose'

const Schema = mongoose.Schema

const goalSchema = new Schema({

  goalDescription: {
    type: String,
  },
  date: {
    type: Date,
    default: function () {
      return new Date().setFullYear(new Date().getFullYear())
    },
    required: true
  },
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  
}, {
  timestamps: true
})

const Goal = mongoose.model('Goal', goalSchema)

export {
  Goal
}

import mongoose from 'mongoose'

const Schema = mongoose.Schema

const happySchema = new Schema({

  description: {
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

const Happy = mongoose.model('Happy', happySchema)

export {
  Happy
}

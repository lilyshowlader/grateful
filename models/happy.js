import mongoose from 'mongoose'

const Schema = mongoose.Schema

const happySchema = new Schema({

  description: String,
  date: Date,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
  
})

const Happy = mongoose.model('Happy', happySchema)

export {
  Happy
}

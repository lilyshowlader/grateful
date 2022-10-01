import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  happy: { type: Schema.Types.ObjectId, ref: 'Happy' },
  goal: { type: Schema.Types.ObjectId, ref: 'Goal' }
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

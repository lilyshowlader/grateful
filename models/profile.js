import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  happy: { type: Schema.Types.ObjectId, ref: 'Happy' },
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

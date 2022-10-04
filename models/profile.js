import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  happys:[{ type: Schema.Types.ObjectId, ref: 'Happy' }],
  goals: [{ type: Schema.Types.ObjectId, ref: 'Goal' }]
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}

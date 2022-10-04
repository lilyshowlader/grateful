import { Profile } from "../models/profile.js"



function show(req, res) {
  Profile.findById(req.user.profile._id)
  .populate("happys")
  .populate("goals")
  .then(profile => {
    res.render('profiles/show', { 
      profile : profile
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}



export {
  show,
}
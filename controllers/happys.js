import { Profile } from "../models/profile.js"
import { Happy } from "../models/happy.js"


// the function below allows the user to VIEW the page where they can input their happy input.
function newHappy (req, res) {
  res.render("happys/new")
  .catch(err => {
    console.log(err)
    res.redirect("/happys")
  })
}


// the function below allows the user to CREATE the happy input.
function create (req, res) {
  req.body.profile = req.user.profile._id
  Happy.create(req.body)
  .then(happy => {
    Profile.updateOne(
      {_id: req.user.profile},
      {$push: {happys:happy}}
    )
    .then(() => {
      res.redirect('/goals/new')
    })
  })
}


// the function belows allows the user to DELETE their happy entries.
function deleteHappy (req, res) {
  Happy.findById(req.params.id)
  .then(happy => {
    if (happy.profile.equals(req.user.profile._id)) {
      happy.delete()
      .then(() => {
        res.redirect('/profiles')
      })
    } else {
      throw new Error ('not authorized')
    }   
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}


// the function belows allows the user to see the details of their happy entry
function show(req, res) {
  Happy.findById(req.params.id)
  .then(happy => {
    res.render('happys/show', { 
      happy : happy
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


// the function below allows a user to view the EDIT page of their happy entry
function edit (req, res) {
  console.log("hitting")
  Happy.findById(req.params.id)
  .then (happy => {
    res.render('happys/edit', {
      happy : happy
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


// the function below allows the user to UPDATE their happy
function update(req, res) {
  Happy.findById(req.params.id)
  .then(happy => {
    if (happy.profile.equals(req.user.profile._id)) {
      happy.updateOne(req.body)
      .then(()=> {
        res.redirect('/profiles')
      })
    } else {
      throw new Error('not authorized')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/`)
  })
}



export {
  newHappy as new,
  create,
  deleteHappy as delete, 
  show,
  edit,
  update,
}
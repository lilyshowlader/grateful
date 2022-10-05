import { Goal } from "../models/goal.js"
import { Happy } from "../models/happy.js"
import { Profile } from "../models/profile.js"

// the function below allows the user to VIEW the page where they can input their goal
function newGoal (req, res) {
  res.render("goals/new")
}


// the function below allows the user to CREATE the goal 
function create (req, res) {
  req.body.profile = req.user.profile._id
  Goal.create(req.body)
  .then(goal => {
    Profile.updateOne(
      {_id: req.user.profile},
      {$push: {goals:goal}}
    )
    .then(() => {
      res.redirect(`/profiles`)
    })
  })
}


// the function belows allows the user to delete their goal entries
function deleteGoal (req, res) {
  Goal.findById(req.params.id)
  .then(goal => {
    if (goal.profile.equals(req.user.profile._id)) {
      goal.delete()
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


function show(req, res) {
  Goal.findById(req.params.id)
  .then(goal => {
    res.render('goals/show', { 
      goal : goal
    })    
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


// the function below allows a user to get to the edit page of their happy
function edit (req, res) {
  console.log("hitting")
  Goal.findById(req.params.id)
  .then (goal => {
    res.render('goals/edit', {
      goal : goal
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}

// the function below allows the user to update their goal
function update(req, res) {
  Goal.findById(req.params.id)
  .then(goal => {
    if (goal.profile.equals(req.user.profile._id)) {
      goal.updateOne(req.body)
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
  newGoal as new,
  create,
  deleteGoal as delete,
  show,
  edit,
  update
}
import { Goal } from "../models/goal.js"
import { Happy } from "../models/happy.js"

// the function below allows the user to VIEW the page where they can input their goal
function newGoal (req, res) {
  res.render("goals/new")
}

// the function below allows the user to CREATE the goal

function create (req, res) {
  Goal.create(req.body)
  .then(goal => {
    res.redirect('/goals')
  })
}

// the function below allows the user to see all their happy and goal entries
// second goals is referring to the DATA
function index (req, res) {
  Goal.find({})
  .then(goals => {
    Happy.find({})
    .then(happys => {
      res.render('goals/index', {
        goals: goals,
        happys: happys
      })
    })
  })
}

// the function belows allows the user to delete their goal entries
function deleteGoal (req, res) {
  console.log("hitting")
  Goal.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/goals")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
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

function update (req, res) {
  console.log("update button hitting")
  Goal.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(goal => {
    res.redirect('/goals')
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}
export {
  newGoal as new,
  create,
  index,
  deleteGoal as delete,
  show,
  edit,
  update
}
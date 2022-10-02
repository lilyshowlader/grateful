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

// second goals is referring to the DATA
function index (req, res) {
  Goal.find({})
  .then(goals => {
    res.render('goals/index', {
      goals: goals
    })
  })
}


export {
  newGoal as new,
  create,
  index
}
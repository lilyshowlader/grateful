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



export {
  newGoal as new,
  create,
  index,
  deleteGoal as delete,
}
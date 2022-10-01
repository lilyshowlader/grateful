import { Goal } from "../models/goal.js"
import { Happy } from "../models/happy.js"

// the function below allows the user to VIEW the page where they can input their goal
function newGoal (req, res) {
  res.render("goals/new")
}

// the function below allows the user to CREATE the goal
// function create (req, res) {
//   Goal.create(req.body)
//   .then(goal => {
//     res.redirect('/goals/gratefulview')
//   })
// }



export {
  newGoal as new,

}
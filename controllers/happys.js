import { Goal } from "../models/goal.js"
import { Happy } from "../models/happy.js"

// the function below allows the user to VIEW the page where they can input their happy input
function newHappy (req, res) {
  res.render("happys/new")
}

// the function below allows the user to CREATE the happy input
function create (req, res) {
  Happy.create(req.body)
  .then(happy => {
    res.redirect('/goals/new')
  })
}

// the function belows allows the user to delete their goal entries
function deleteHappy (req, res) {
  console.log("hitting")
  Happy.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect("/goals")
  })
  .catch(err => {
    console.log(err)
    res.redirect("/")
  })
}


export {
  newHappy as new,
  create,
  deleteHappy as delete, 
}
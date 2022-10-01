import { Goal } from "../models/goal.js"
import { Happy } from "../models/happy.js"


function newHappy (req, res) {
  res.render("happy/new")
}

export {
  newHappy as new,

}
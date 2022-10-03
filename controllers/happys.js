import { Model } from "mongoose"
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

// the function belows allows the user to delete their happy entries
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

// the function belows allows the user to see an indiviual happy
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

// the function below allows a user to get to the edit page of their happy
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

// the function below allows the user to update their happy
function update (req, res) {
 console.log("update button hitting")
}

export {
  newHappy as new,
  create,
  deleteHappy as delete, 
  show,
  edit,
  update,
}
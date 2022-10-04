import { Router } from 'express'
import passport from 'passport'
import * as happysCtrl from '../controllers/happys.js'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET 3000/goals/new -> view new goals page 
router.get('/new', isLoggedIn, goalsCtrl.new)

// GET 3000/goals/:id/edit -> view edit individual goal page 
router.get("/:id/edit", isLoggedIn, goalsCtrl.edit)

// POST 3000/goals -> to create a new goal
router.post('/', isLoggedIn, goalsCtrl.create)

// DELETE 3000/goals/:id -> to delete individual goal
router.delete('/:id',isLoggedIn,  goalsCtrl.delete)

// SHOW -> show an individual goal 
router.get('/:id', isLoggedIn, goalsCtrl.show)

// PUT /goals/:id -> update the individual happy 
router.put("/:id", isLoggedIn, goalsCtrl.update)

export { 
  router
}
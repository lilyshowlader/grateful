import { Router } from 'express'
import passport from 'passport'
import * as happysCtrl from '../controllers/happys.js'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET 3000/goals/new -> view new goals page 
router.get('/new', isLoggedIn, goalsCtrl.new)

// POST 3000/goals -> to create a new goal
router.post('/', isLoggedIn, goalsCtrl.create)

// GET 3000/goals -> to view index page
router.get('/', isLoggedIn, goalsCtrl.index)

// DELETE 3000/goals/:id -> to delete individual goal
router.delete('/:id', goalsCtrl.delete)

// DELETE 3000/goals/:id -> to delete individual goal
router.delete('/:id', happysCtrl.delete)


export { 
  router
}
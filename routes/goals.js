import { Router } from 'express'
import passport from 'passport'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET 3000/goals/new -> view new goals page 
router.get('/new', isLoggedIn, goalsCtrl.new)

// POST  
// router.post('/', isLoggedIn, goalsCtrl.create)


// GET 3000/goals/gratefulview -> view new goals page 
// router.get('/gratefulview', isLoggedIn, goalsCtrl.index)

export { 
  router
}
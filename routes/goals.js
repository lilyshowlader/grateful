import { Router } from 'express'
import passport from 'passport'
import * as goalsCtrl from '../controllers/goals.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET 3000/goals/new -> view new goals page 
router.get('/new', isLoggedIn, goalsCtrl.new)

// POST  -> to create 
router.post('/', isLoggedIn, goalsCtrl.create)


// GET 3000/goals 
router.get('/', isLoggedIn, goalsCtrl.index)

export { 
  router
}
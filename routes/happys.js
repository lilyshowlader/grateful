import { Router } from 'express'
import passport from 'passport'
import * as happysCtrl from '../controllers/happys.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET 3000/happys/new -> view new happy page
router.get('/new', isLoggedIn, happysCtrl.new)

// POST 
router.post('/', isLoggedIn, happysCtrl.create)


export {
  router,
}

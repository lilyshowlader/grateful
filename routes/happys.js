import { Router } from 'express'
import passport from 'passport'
import * as happysCtrl from '../controllers/happys.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

// GET 3000/happys/new -> view new happy page
router.get('/new', isLoggedIn, happysCtrl.new)

// GET 3000/happys/:id/edit -> view edit individual happy page 
router.get("/:id/edit", happysCtrl.edit)

// POST 3000/happys -> to create a new happy
router.post('/', isLoggedIn, happysCtrl.create)

// DELETE 3000/happys/:id -> to delete individual happy
router.delete('/:id', happysCtrl.delete)

// SHOW -> show details of an individual happy
router.get('/:id', happysCtrl.show)

export {
  router,
}

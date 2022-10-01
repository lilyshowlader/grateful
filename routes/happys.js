import { Router } from 'express'
import passport from 'passport'
import * as happysCtrl from '../controllers/happys.js'

const router = Router()

// GET 3000/happy -> view new happy page
router.get('/new', happysCtrl.new)

export {
  router
}

import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// GET 
router.get('/', isLoggedIn, profilesCtrl.show)


export { 
  router
}
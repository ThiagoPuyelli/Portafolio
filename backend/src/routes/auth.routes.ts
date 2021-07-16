import passport from 'passport'
import { Router } from 'express'
import sendResponse from '../utils/sendResponse'
import jwt from 'jsonwebtoken'
const router = Router()

router.post('/login', passport.authenticate('login'), (req, res) => {
  try {
    const token = jwt.sign({ userID: req.user._id }, process.env.JWT_PASSWORD, {
      expiresIn: '1d'
    })

    return sendResponse(res, 200, { token })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router

import { Router } from 'express'
import Skill from '../models/Skill'
import sendResponse from '../utils/sendResponse'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find()
    if (!skills) {
      return sendResponse(res, 500, 'Error to get skills')
    }

    return sendResponse(res, 200, { skills })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router

import { Router } from 'express'
import passport from 'passport'
import validateReq from '../middlewares/validateReq'
import sendResponse from '../utils/sendResponse'
import { saveAndModifyProject } from '../validators/projects'
import Project from '../models/Project'
const router = Router()

router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()

    if (!projects) {
      return sendResponse(res, 500, 'Error to find projects')
    }

    return sendResponse(res, 200, { projects })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)

    if (!project) {
      return sendResponse(res, 500, 'Error to find project')
    }

    return sendResponse(res, 200, { project })
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

router.post('/',
  passport.authenticate('token'),
  validateReq(saveAndModifyProject(true)),
  async (req, res) => {
    try {
      const project = await Project.create({ ...req.body })

      if (!project) {
        return sendResponse(res, 500, 'Error to save project')
      }

      return sendResponse(res, 200, 'Project created')
    } catch (err) {
      return sendResponse(res, 500, err.message || 'Server error')
    }
  })

router.put('/:id',
  passport.authenticate('token'),
  validateReq(saveAndModifyProject(false)),
  async (req, res) => {
    try {
      const projectUpdate = await Project.findByIdAndUpdate(req.params.id, { ...req.body })

      if (!projectUpdate) {
        return sendResponse(res, 500, 'Error to update project')
      }

      return sendResponse(res, 200, 'Project Updated')
    } catch (err) {
      return sendResponse(res, 500, err.message || 'Server error')
    }
  })

router.delete('/:id', passport.authenticate('token'), async (req, res) => {
  try {
    const projectDelete = await Project.findByIdAndRemove(req.params.id)

    if (!projectDelete) {
      return sendResponse(res, 500, 'Error to delete project')
    }

    return sendResponse(res, 200, 'Project removed')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router

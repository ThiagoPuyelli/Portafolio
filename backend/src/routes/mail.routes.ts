import nodemailer from 'nodemailer'
import { Router } from 'express'
import mail from '../validators/mail'
import validateReq from '../middlewares/validateReq'
import sendResponse from '../utils/sendResponse'
const router = Router()

router.post('/', validateReq(mail), async (req, res) => {
  try {
    const { matter, description, phone, email } = req.body
    await nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL,
        pass: process.env.MAIL_PASSWORD
      }
    }).sendMail({
      from: '\'Aviso Portafolio\' <cloudinaryprueba@gmail.com>',
      to: 'thiagopuyelli@gmail.com',
      subject: matter,
      html: `
        <b>${description}</b>
        <p>Telefono: ${phone}</p>
        <p>Email: ${email}</p>
      `
    })

    return sendResponse(res, 200, 'Email sended')
  } catch (err) {
    return sendResponse(res, 500, err.message || 'Server error')
  }
})

export default router

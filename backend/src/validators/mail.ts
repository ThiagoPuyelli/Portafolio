import genValidator from '../utils/genValidator'
import { object } from 'joi'

export default object({
  matter: genValidator('string', true, { max: 70 }),
  description: genValidator('string', true, { max: 400 }),
  phone: genValidator('string', true, { max: 30 }),
  email: genValidator('string', true, { max: 30 })
})

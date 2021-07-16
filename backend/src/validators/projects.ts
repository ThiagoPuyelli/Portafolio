import joi from 'joi'
import genValidator from '../utils/genValidator'

export const saveAndModifyProject = (required: boolean) => {
  return joi.object({
    title: genValidator('string', required, undefined),
    description: genValidator('string', required, undefined),
    tecnologies: genValidator('array', required, undefined).items(joi.string()),
    image: genValidator('string', required, undefined)
  })
}

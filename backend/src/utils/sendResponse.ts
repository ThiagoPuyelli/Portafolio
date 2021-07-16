import { Response } from 'express'

export default (res: Response, code: number, message: any) => {
  if (code > 299) {
    return res.json({
      message,
      code
    })
  } else {
    return res.json({
      message
    })
  }
}

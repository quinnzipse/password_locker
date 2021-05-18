import type { NextApiRequest, NextApiResponse } from 'next'

const withLogging = (callback: Function) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(`${req.method} - ${req.url}`)
    return callback(req, res)
  }
}

export default withLogging

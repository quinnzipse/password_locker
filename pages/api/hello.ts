import { NextApiRequest, NextApiResponse } from 'next'
import withLogging from '../../middleware/withLogging'
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

function hello (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: 'John Doe' })
}

export default withLogging(hello)
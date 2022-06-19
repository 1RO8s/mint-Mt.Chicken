// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("NEXT_PUBLIC_VERCEL_ENV:",process.env.NEXT_PUBLIC_VERCEL_ENV)
  console.log("NODE_ENV:",process.env.NODE_ENV)
  console.log("VERCEL_ENV:",process.env.VERCEL_ENV)
  console.log("GA_TRACKING_ID:",process.env.GA_TRACKING_ID)
  console.log("NEXT_GA_TRACKING_ID:",process.env.NEXT_GA_TRACKING_ID)
  console.log("NEXT_PUBLIC_GA_TRACKING_ID:",process.env.NEXT_PUBLIC_GA_TRACKING_ID)
  console.log("NEXT_PUBLIC_VERCEL_GA_TRACKING_ID:",process.env.NEXT_PUBLIC_VERCEL_GA_TRACKING_ID)
  res.status(200).json({ name: 'John Doe' })
}

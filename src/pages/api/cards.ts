import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../src/lib/prisma'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const cards = await prisma.card.findMany({ select: { id: true, name: true, set: true, year: true, player: true, grade: true, imageUrl: true } })
  res.status(200).json(cards)
}

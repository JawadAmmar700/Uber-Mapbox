import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { id, userId } = req.body
    await prisma.locations.delete({
      where: {
        id: id,
      },
    })
    const filtered = await prisma.locations.findMany()
    res.json({ filtered })
  }
}

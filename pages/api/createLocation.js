import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = await prisma.user.findMany()
    let id = 0
    data.map(item => {
      if (item.name === req.body.email) {
        id = item.id
      }
    })
    console.log(id)
    if (req.body.todo && id > 0) {
      await prisma.locations.create({
        data: {
          UserId: id,
          Name: req.body.todo,
        },
      })
    }
    res.send('ok')
  } else {
    const allLocations = await prisma.locations.findMany()
    res.json({ allLocations })
  }
}

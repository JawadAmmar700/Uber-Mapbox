// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    const users = await prisma.user.findMany()
    let found = false
    users.map(async user => {
      if (user.name === req.body.email) {
        found = user
      }
    })
    if (!found) {
      const newUser = await prisma.user.create({
        data: { name: req.body.email },
      })
      res.status(200).json(newUser)
    } else {
      res.status(200).json(found)
    }
    // res.send('ok')
  }
}

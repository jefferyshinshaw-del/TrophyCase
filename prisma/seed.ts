import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  await prisma.pricePoint.deleteMany()
  await prisma.userCard.deleteMany()
  await prisma.listing.deleteMany()
  await prisma.card.deleteMany()
  await prisma.user.deleteMany()

  const card1 = await prisma.card.create({
    data: {
      name: '1986 Fleer Michael Jordan #57',
      set: '1986 Fleer',
      year: 1986,
      player: 'Michael Jordan',
      grade: 'Ungraded',
      imageUrl: '/sample/mj-1986.jpg',
      pricePoints: {
        create: [
          { price: 120.0, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) },
          { price: 180.0, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
          { price: 220.0, timestamp: new Date() }
        ]
      },
      listings: {
        create: [
          { marketplace: 'eBay', price: 229.99, url: 'https://example.com/listing/1' }
        ]
      }
    }
  })

  const card2 = await prisma.card.create({
    data: {
      name: '2009 Bowman Draft Picks Mike Trout #BDPP89',
      set: '2009 Bowman Draft Picks',
      year: 2009,
      player: 'Mike Trout',
      grade: 'Ungraded',
      imageUrl: '/sample/trout-2009.jpg',
      pricePoints: {
        create: [
          { price: 40.0, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) },
          { price: 55.0, timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
          { price: 75.0, timestamp: new Date() }
        ]
      }
    }
  })

  const user = await prisma.user.create({ data: { email: 'demo@trophy.case', name: 'Demo User' } })

  await prisma.userCard.create({ data: { userId: user.id, cardId: card1.id, quantity: 1, purchasePrice: 100 } })
  await prisma.userCard.create({ data: { userId: user.id, cardId: card2.id, quantity: 2, purchasePrice: 30 } })

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

import { useEffect, useState } from 'react'

type Card = {
  id: number
  name: string
  set?: string
  year?: number
  player?: string
  grade?: string
  imageUrl?: string
}

export default function Home() {
  const [cards, setCards] = useState<Card[]>([])

  useEffect(() => {
    fetch('/api/cards')
      .then((r) => r.json())
      .then((data) => setCards(data))
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Trophy Case — Demo</h1>
        <p className="text-gray-600">A simple starter showing seeded cards and price points.</p>
      </header>

      <main className="max-w-4xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map((c) => (
          <div key={c.id} className="bg-white rounded-lg shadow p-4 flex">
            <div className="w-24 h-32 bg-gray-200 rounded-md mr-4 flex-shrink-0" />
            <div>
              <h2 className="font-semibold">{c.name}</h2>
              <div className="text-sm text-gray-500">{c.player} • {c.set} • {c.year}</div>
              <div className="mt-2">
                <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded">View</button>
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}

const gettingThere = [
  { title: 'Air', description: 'Most visitors arrive by air. Taniti has regular flight service.' },
  { title: 'Cruise Ship', description: 'Some visitors arrive by cruise ship, docking at Merriton Landing.' },
]

const gettingAround = [
  { title: 'Public Bus', description: 'Public buses operate within Taniti City.' },
  { title: 'Private Bus', description: 'Private bus services cover routes outside Taniti City.' },
  { title: 'Taxi', description: 'Taxis are available throughout the island.' },
  { title: 'Rental Car', description: 'Rental cars are available for visitors who want to explore independently.' },
  { title: 'Bike Rental', description: 'Bike rentals are available for shorter trips around town.' },
  { title: 'Walking', description: 'Many areas of Taniti City are walkable.' },
]

function TransportList({ items }) {
  return (
    <div className="card-grid">
      {items.map((item) => (
        <div key={item.title} className="card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default function Transportation() {
  return (
    <div>
      <h1>Transportation</h1>

      <section className="section">
        <h2>Getting to Taniti</h2>
        <TransportList items={gettingThere} />
      </section>

      <section className="section">
        <h2>Getting Around Taniti</h2>
        <p>
          Taniti City has public bus service. Outside the city, private buses, taxis,
          rental cars, bikes, and walking are common ways to get around.
        </p>
        <TransportList items={gettingAround} />
      </section>
    </div>
  )
}

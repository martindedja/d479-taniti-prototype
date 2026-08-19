const gettingThere = [
  { title: 'Air', description: 'Almost all visitors arrive by air. Taniti’s airport can accommodate small jets and propeller planes. The airport is being expanded, so larger jets may be able to land within the next few years.' },
  { title: 'Cruise Ship', description: 'Some visitors arrive on a small cruise ship, which docks in Yellow Leaf Bay one night per week.' },
]

const gettingAround = [
  { title: 'Public Bus', description: 'Public buses serve Taniti City and run from 5:00 a.m. to 11:00 p.m. every day.' },
  { title: 'Private Bus', description: 'Private buses serve the rest of the island, outside Taniti City.' },
  { title: 'Taxi', description: 'Taxis are available in Taniti City.' },
  { title: 'Rental Car', description: 'Rental cars are available from a local rental agency near the airport.' },
  { title: 'Bike Rental', description: 'Bikes and helmets are available from several vendors. Helmets are required by law.' },
  { title: 'Walking', description: 'Taniti City is fairly flat and very walkable. The area around Merriton Landing is also easy to explore on foot.' },
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
          Taniti City has public bus service, taxis, and is fairly flat and walkable.
          Outside the city, private buses, rental cars, and bikes are common ways to
          get around.
        </p>
        <TransportList items={gettingAround} />
      </section>
    </div>
  )
}

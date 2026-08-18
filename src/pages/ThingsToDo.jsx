import attractions from '../data/attractions.js'
import AttractionCard from '../components/AttractionCard.jsx'

export default function ThingsToDo() {
  return (
    <div>
      <h1>Things to Do</h1>
      <p>
        From beaches and rainforest hikes to volcano tours and city nightlife,
        Taniti offers a wide range of activities. Select an activity below to
        learn more.
      </p>
      <div className="card-grid">
        {attractions.map((a) => (
          <AttractionCard key={a.slug} slug={a.slug} title={a.title} summary={a.summary} />
        ))}
      </div>
    </div>
  )
}

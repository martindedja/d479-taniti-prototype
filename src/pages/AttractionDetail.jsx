import { Link, useParams } from 'react-router-dom'
import attractions, { getAttraction } from '../data/attractions.js'
import Placeholder from '../components/Placeholder.jsx'

export default function AttractionDetail() {
  const { slug } = useParams()
  const attraction = getAttraction(slug)

  if (!attraction) {
    return (
      <div>
        <h1>Attraction Not Found</h1>
        <p>We could not find that attraction.</p>
        <Link to="/things-to-do" className="button secondary">Back to Things to Do</Link>
      </div>
    )
  }

  const related = attractions.filter((a) => a.slug !== attraction.slug).slice(0, 3)

  return (
    <div>
      <Link to="/things-to-do" className="back-link">&larr; Back to Things to Do</Link>

      <h1>{attraction.title}</h1>
      <Placeholder label={`${attraction.title} Image Placeholder`} tall />

      <section className="section">
        <h2>Description</h2>
        <p>{attraction.summary}</p>
      </section>

      <section className="section">
        <h2>What to Expect</h2>
        <p>{attraction.whatToExpect}</p>
      </section>

      <section className="section">
        <h2>Location &amp; Planning</h2>
        <p><strong>Location:</strong> {attraction.location}</p>
        <p><strong>Planning:</strong> {attraction.planning}</p>
      </section>

      <Link to="/visitor-information" className="button primary">
        Learn More / Booking Information
      </Link>

      <section className="section">
        <h2>Related Attractions</h2>
        <div className="card-grid">
          {related.map((a) => (
            <Link key={a.slug} to={`/things-to-do/${a.slug}`} className="card attraction-card">
              <Placeholder label={a.title} />
              <h3>{a.title}</h3>
              <p>{a.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

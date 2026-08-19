import { Link, useParams } from 'react-router-dom'
import { getLodging } from '../data/lodging.js'
import Placeholder from '../components/Placeholder.jsx'

export default function LodgingDetail() {
  const { slug } = useParams()
  const lodging = getLodging(slug)

  if (!lodging) {
    return (
      <div>
        <h1>Lodging Option Not Found</h1>
        <p>We could not find that lodging option.</p>
        <Link to="/lodging" className="button secondary">Back to Lodging</Link>
      </div>
    )
  }

  return (
    <div>
      <Link to="/lodging" className="back-link">&larr; Back to Lodging</Link>

      <h1>{lodging.title}</h1>
      <Placeholder label={`${lodging.title} Image Placeholder`} tall />

      <section className="section">
        <h2>Description</h2>
        <p>{lodging.summary}</p>
      </section>

      <section className="section">
        <h2>What Visitors Should Know</h2>
        <p>{lodging.whatToKnow}</p>
        <p>
          All lodging types on Taniti, including this one, are strictly regulated and
          regularly inspected by the Tanitian government.
        </p>
      </section>

      <Link to="/lodging" className="button primary">Back to Lodging</Link>
    </div>
  )
}

import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.jsx'
import lodgingOptions from '../data/lodging.js'

export default function Lodging() {
  return (
    <div>
      <h1>Lodging</h1>
      <p>
        All lodging on Taniti is strictly regulated and regularly inspected by the
        Tanitian government to help ensure visitor safety and quality. Options range
        from budget-friendly to full-service. Select an option below for more details.
      </p>
      <div className="card-grid">
        {lodgingOptions.map((option) => (
          <Link key={option.slug} to={`/lodging/${option.slug}`} className="card">
            <Placeholder label={option.title} />
            <h3>{option.title}</h3>
            <p>{option.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

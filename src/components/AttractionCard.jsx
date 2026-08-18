import { Link } from 'react-router-dom'
import Placeholder from './Placeholder.jsx'

export default function AttractionCard({ slug, title, summary }) {
  return (
    <Link to={`/things-to-do/${slug}`} className="card attraction-card">
      <Placeholder label={title} />
      <h3>{title}</h3>
      <p>{summary}</p>
    </Link>
  )
}

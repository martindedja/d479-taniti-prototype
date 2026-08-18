import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.jsx'

const lodgingOptions = [
  {
    title: 'Hostel',
    description:
      'An inexpensive hostel option for budget-conscious travelers, offering shared and private rooms.',
  },
  {
    title: 'Family-Owned Hotels',
    description:
      'Several small, family-owned hotels are located throughout Taniti, offering a more personal stay.',
  },
  {
    title: 'Bed & Breakfasts',
    description:
      'Bed and breakfasts provide a home-like atmosphere with breakfast included in the stay.',
  },
  {
    title: 'Four-Star Resort',
    description:
      'One four-star resort offers full-service amenities for visitors who want a higher-end stay.',
  },
]

export default function Lodging() {
  return (
    <div>
      <h1>Lodging</h1>
      <p>
        All lodging on Taniti is regulated and inspected by the local government to
        help ensure visitor safety and quality. Options range from budget-friendly
        to full-service.
      </p>
      <div className="card-grid">
        {lodgingOptions.map((option) => (
          <div key={option.title} className="card">
            <Placeholder label={option.title} />
            <h3>{option.title}</h3>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
      <Link to="/visitor-information" className="button primary">
        View Lodging / Booking Information
      </Link>
    </div>
  )
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-section">
        <h3>Visitor Information</h3>
        <ul>
          <li><Link to="/visitor-information">Currency &amp; Payment</Link></li>
          <li><Link to="/visitor-information">Language</Link></li>
          <li><Link to="/visitor-information">Healthcare &amp; Safety</Link></li>
          <li><Link to="/visitor-information">Electrical Outlets</Link></li>
          <li><Link to="/visitor-information">Alcohol Rules</Link></li>
          <li><Link to="/visitor-information">National Holidays</Link></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Plan Your Trip</h3>
        <ul>
          <li><Link to="/things-to-do">Things to Do</Link></li>
          <li><Link to="/lodging">Lodging</Link></li>
          <li><Link to="/dining">Dining</Link></li>
          <li><Link to="/transportation">Transportation</Link></li>
        </ul>
      </div>
      <div className="footer-note">
        <p>Taniti Tourism &mdash; Student UX Prototype (WGU D479)</p>
      </div>
    </footer>
  )
}

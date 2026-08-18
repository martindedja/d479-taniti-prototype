import { Link } from 'react-router-dom'
import Placeholder from '../components/Placeholder.jsx'
import AttractionCard from '../components/AttractionCard.jsx'

export default function Home() {
  return (
    <div>
      <section className="hero">
        <Placeholder label="Hero Image Placeholder" tall />
        <h1>Welcome to Taniti</h1>
        <p>
          Taniti is a small tropical island offering sandy and rocky beaches, a lush
          rainforest, a mountainous interior, and an active volcano. Whether you want
          to relax on the coast or explore the interior, Taniti has something for
          every visitor.
        </p>
        <div className="button-row">
          <Link to="/things-to-do" className="button primary">Explore Things to Do</Link>
          <Link to="/visitor-information" className="button secondary">Plan Your Trip</Link>
        </div>
      </section>

      <section className="section">
        <h2>Featured Attractions</h2>
        <div className="card-grid">
          <AttractionCard
            slug="beaches"
            title="Beaches"
            summary="Sandy and rocky beaches along the coast."
          />
          <AttractionCard
            slug="rainforest"
            title="Rainforest"
            summary="Trails through tropical rainforest and mountains."
          />
          <AttractionCard
            slug="volcano"
            title="Volcano"
            summary="Guided views and tours of Taniti's active volcano."
          />
        </div>
      </section>

      <section className="section">
        <h2>Plan Your Trip</h2>
        <div className="card-grid">
          <Link to="/lodging" className="card plan-card">
            <h3>Lodging</h3>
            <p>Hostels, hotels, bed &amp; breakfasts, and a four-star resort.</p>
          </Link>
          <Link to="/dining" className="card plan-card">
            <h3>Dining</h3>
            <p>Local fish and rice, American-style, and Pan-Asian restaurants.</p>
          </Link>
          <Link to="/transportation" className="card plan-card">
            <h3>Transportation</h3>
            <p>Getting to Taniti and getting around once you arrive.</p>
          </Link>
        </div>
      </section>
    </div>
  )
}

import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ThingsToDo from './pages/ThingsToDo.jsx'
import AttractionDetail from './pages/AttractionDetail.jsx'
import Lodging from './pages/Lodging.jsx'
import Dining from './pages/Dining.jsx'
import Transportation from './pages/Transportation.jsx'
import VisitorInformation from './pages/VisitorInformation.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/things-to-do/:slug" element={<AttractionDetail />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/visitor-information" element={<VisitorInformation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

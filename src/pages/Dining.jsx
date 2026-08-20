import Placeholder from '../components/Placeholder.jsx'

const diningOptions = [
  {
    title: 'Local Fish & Rice',
    count: '5 restaurants',
    description:
      'Five restaurants across the island serve traditional local dishes built around fresh fish and rice.',
  },
  {
    title: 'American-Style Dining',
    count: '3 restaurants',
    description:
      'Three American-style restaurants offer familiar options for visitors who want a taste of home.',
  },
  {
    title: 'Pan-Asian Dining',
    count: '2 restaurants',
    description: 'Two Pan-Asian restaurants serve dishes inspired by various Asian cuisines.',
  },
]

export default function Dining() {
  return (
    <div>
      <h1>Dining</h1>
      <p>Taniti offers a small but varied dining scene, mostly concentrated in Taniti City.</p>
      <div className="card-grid">
        {diningOptions.map((option) => (
          <div key={option.title} className="card">
            <Placeholder label={`${option.title} Image Placeholder`} />
            <h3>{option.title}</h3>
            <p className="muted">{option.count}</p>
            <p>{option.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

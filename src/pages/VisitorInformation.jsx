const sections = [
  {
    title: 'Currency',
    items: [
      'The U.S. dollar is accepted.',
      'Euros and yen are also accepted in many places.',
      'Major credit cards are accepted.',
    ],
  },
  {
    title: 'Language',
    items: [
      'Many younger residents speak English.',
      'Less English is spoken in rural areas.',
    ],
  },
  {
    title: 'Healthcare',
    items: ['A hospital and clinics are available on the island.'],
  },
  {
    title: 'Safety',
    items: [
      'Violent crime is rare.',
      'Petty crime, such as pickpocketing, can occur. Keep valuables secure.',
    ],
  },
  {
    title: 'Electrical Outlets',
    items: ['Taniti uses 120V electrical outlets.'],
  },
  {
    title: 'Alcohol Rules',
    items: [
      'The drinking age is 18.',
      'Alcohol cannot be sold between midnight and 9:00 a.m.',
    ],
  },
  {
    title: 'National Holidays',
    items: ['Many attractions may close on national holidays. Check ahead before visiting.'],
  },
  {
    title: 'Groceries & Essentials',
    items: [
      'Taniti has two supermarkets.',
      'Taniti has two smaller grocery stores.',
      'Taniti has one convenience store open 24 hours a day.',
    ],
  },
]

export default function VisitorInformation() {
  return (
    <div>
      <h1>Visitor Information</h1>
      <p>Practical information to help you plan a smooth trip to Taniti.</p>
      <div className="info-grid">
        {sections.map((section) => (
          <div key={section.title} className="card info-card">
            <h3>{section.title}</h3>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

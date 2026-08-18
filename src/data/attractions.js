// Shared content for Things to Do cards and Attraction Detail pages.
// The volcano entry is the fully worked example referenced in the assignment.
const attractions = [
  {
    slug: 'beaches',
    title: 'Beaches',
    summary: 'Sandy and rocky beaches along the Taniti coastline.',
    whatToExpect:
      'Both soft sandy stretches and rocky tide-pool areas are open to the public. Swimming, sunbathing, and beachcombing are popular. Some beaches are near Yellow Leaf Bay and Taniti City.',
    location: 'Multiple locations along the coast, including near Yellow Leaf Bay.',
    planning: 'Open year-round, weather permitting. No admission fee.',
  },
  {
    slug: 'rainforest',
    title: 'Rainforest Hiking',
    summary: 'Guided and self-guided trails through Taniti’s tropical rainforest.',
    whatToExpect:
      'Marked trails of varying difficulty pass through dense tropical rainforest in the island’s interior. Expect humidity, uneven terrain, and opportunities to see local plant and animal life.',
    location: 'Trailheads in the mountainous interior of the island.',
    planning: 'Sturdy footwear recommended. Some trails require a guide.',
  },
  {
    slug: 'volcano',
    title: 'Volcano',
    summary: 'A guided visit to Taniti’s active volcano in the mountainous interior.',
    whatToExpect:
      'Visitors can view the active volcano from designated overlook points and, on select tours, hike closer with a licensed guide. Conditions can change quickly, so all visits follow current park safety guidance.',
    location: 'Mountainous interior of Taniti, accessible by tour vehicle and marked trail.',
    planning:
      'Guided tours recommended. Closed to the public during periods of increased volcanic activity. Wear sturdy shoes and bring water.',
  },
  {
    slug: 'snorkeling',
    title: 'Snorkeling',
    summary: 'Shallow reef snorkeling spots near the coast.',
    whatToExpect:
      'Calm, clear water near several beach areas makes for easy snorkeling. Equipment rental is available from local operators.',
    location: 'Coastal reef areas, including near Yellow Leaf Bay.',
    planning: 'Best during calm morning conditions. Rental gear available on site.',
  },
  {
    slug: 'zip-lining',
    title: 'Zip-lining',
    summary: 'Zip-line courses through the rainforest canopy.',
    whatToExpect:
      'Guided zip-line tours travel over and through the rainforest canopy. Courses include multiple lines of varying length and height.',
    location: 'Rainforest canopy tour sites in the interior.',
    planning: 'Weight and age restrictions may apply. Booking ahead is recommended.',
  },
  {
    slug: 'fishing-tours',
    title: 'Charter Fishing Tours',
    summary: 'Chartered boat tours for deep-sea and coastal fishing.',
    whatToExpect:
      'Local operators run half-day and full-day fishing charters departing from Taniti City and Merriton Landing. Equipment is typically included.',
    location: 'Departs from Taniti City and Merriton Landing docks.',
    planning: 'Advance booking recommended, especially in peak season.',
  },
  {
    slug: 'sightseeing',
    title: 'Sightseeing',
    summary: 'General island sightseeing, including helicopter rides.',
    whatToExpect:
      'Sightseeing options range from walking tours of Taniti City to scenic helicopter rides over the island, rainforest, and volcano.',
    location: 'Tours depart from Taniti City and Merriton Landing.',
    planning: 'Helicopter tours are weather dependent and should be booked ahead.',
  },
  {
    slug: 'entertainment',
    title: 'Entertainment',
    summary: 'Museums, galleries, pubs, and nightlife in Taniti City.',
    whatToExpect:
      'Taniti City offers a local history museum, art galleries, pubs, a microbrewery, a dance club, a movie theater, an arcade, and a bowling alley.',
    location: 'Primarily in Taniti City.',
    planning: 'Hours vary by venue. Some locations may close on national holidays.',
  },
]

export default attractions

export function getAttraction(slug) {
  return attractions.find((a) => a.slug === slug)
}

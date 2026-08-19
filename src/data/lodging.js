// Shared content for Lodging cards and Lodging Detail pages.
// Only facts supplied in the D479 source materials are used here.
const lodgingOptions = [
  {
    slug: 'hostel',
    title: 'Inexpensive Hostel',
    summary: 'A budget-friendly hostel option for cost-conscious travelers.',
    whatToKnow:
      'Taniti has lodging ranging from an inexpensive hostel to one large four-star resort, so the hostel is the most budget-friendly option on the island for visitors looking to save on lodging costs.',
  },
  {
    slug: 'hotels',
    title: 'Family-Owned Hotels',
    summary: 'Many small, family-owned hotels located around the island.',
    whatToKnow:
      'There are many small family-owned hotels throughout Taniti, offering a more personal, locally-run alternative to larger lodging options.',
  },
  {
    slug: 'bed-and-breakfasts',
    title: 'Bed & Breakfasts',
    summary: 'A growing number of bed and breakfasts across the island.',
    whatToKnow:
      'Taniti has a growing number of bed and breakfasts for visitors who prefer a smaller, home-style stay.',
  },
  {
    slug: 'resort',
    title: 'Four-Star Resort',
    summary: 'One large four-star resort on the island.',
    whatToKnow:
      'Taniti has one large four-star resort, the highest tier of lodging currently available on the island.',
  },
]

export default lodgingOptions

export function getLodging(slug) {
  return lodgingOptions.find((l) => l.slug === slug)
}

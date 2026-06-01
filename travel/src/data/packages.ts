export interface TravelPackage {
  id: string
  type: 'cruise' | 'resort' | 'adventure'
  name: string
  destination: string
  region: string
  departurePort?: string
  duration: number
  price: number
  originalPrice?: number
  priceLabel: string
  fanCashEarn: number
  fanCashRate: string
  image: string
  gallery: string[]
  rating: number
  reviewCount: number
  highlights: string[]
  description: string
  itinerary: ItineraryDay[]
  included: string[]
  notIncluded: string[]
  provider: string
  badge?: string
  sportsTie?: string
  departureDates: string[]
  cabinTypes?: CabinType[]
  roomTypes?: RoomType[]
}

export interface ItineraryDay {
  day: number
  port: string
  description: string
  arrive?: string
  depart?: string
}

export interface CabinType {
  name: string
  price: number
  description: string
  maxGuests: number
}

export interface RoomType {
  name: string
  price: number
  description: string
  maxGuests: number
}

export const packages: TravelPackage[] = [
  {
    id: 'caribbean-7',
    type: 'cruise',
    name: 'Caribbean All-Stars Cruise',
    destination: 'Caribbean',
    region: 'Caribbean',
    departurePort: 'Miami, FL',
    duration: 7,
    price: 899,
    originalPrice: 1199,
    priceLabel: 'per person',
    fanCashEarn: 45,
    fanCashRate: '5% back in FanCash',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
      'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?w=1200&q=80',
    ],
    rating: 4.8,
    reviewCount: 2143,
    highlights: ['7 Ports of Call', 'Included Shore Excursions', 'All-Inclusive Dining', 'Sports Bar Onboard'],
    description: 'Set sail on the ultimate fan getaway — a 7-night Caribbean cruise departing from Miami. Explore sun-soaked islands while staying connected to every game with our dedicated sports bar and live score updates throughout the ship. Earn FanCash on your entire booking.',
    itinerary: [
      { day: 1, port: 'Miami, FL', description: 'Embarkation Day — Board the ship and explore the deck', depart: '4:00 PM' },
      { day: 2, port: 'Nassau, Bahamas', description: 'Explore the colorful capital, beach breaks, and local markets', arrive: '7:00 AM', depart: '5:00 PM' },
      { day: 3, port: 'At Sea', description: 'Full day at sea — pool deck, spa, sports bar, live games on the big screen' },
      { day: 4, port: 'St. Thomas, USVI', description: 'Duty-free shopping, snorkeling, and stunning harbor views', arrive: '8:00 AM', depart: '6:00 PM' },
      { day: 5, port: 'St. Maarten', description: 'Half Dutch, half French — beaches, bistros, and boutiques', arrive: '8:00 AM', depart: '5:00 PM' },
      { day: 6, port: 'At Sea', description: 'Relax and recharge — trivia nights, live entertainment, and fine dining' },
      { day: 7, port: 'Miami, FL', description: 'Disembarkation Day — Return to Miami', arrive: '7:00 AM' },
    ],
    included: ['All meals onboard', 'Entertainment & shows', 'Access to pools & fitness center', 'Port taxes & fees', 'FanCash credit applied at checkout'],
    notIncluded: ['Flights to Miami', 'Shore excursions (optional add-ons)', 'Alcoholic beverages', 'Gratuities'],
    provider: 'Premium Cruise Line',
    badge: 'Best Value',
    sportsTie: 'Miami Heat, Miami Dolphins',
    departureDates: ['Jun 14, 2026', 'Jun 28, 2026', 'Jul 12, 2026', 'Jul 26, 2026', 'Aug 9, 2026'],
    cabinTypes: [
      { name: 'Interior Cabin', price: 899, description: 'Cozy and comfortable, perfect for fans on the go', maxGuests: 4 },
      { name: 'Ocean View', price: 1149, description: 'Wake up to stunning sea views every morning', maxGuests: 4 },
      { name: 'Balcony Suite', price: 1549, description: 'Private balcony to watch sunsets over the Caribbean', maxGuests: 4 },
      { name: 'Premium Suite', price: 2299, description: 'Luxurious accommodations with priority boarding and exclusive lounge access', maxGuests: 6 },
    ],
  },
  {
    id: 'alaska-10',
    type: 'cruise',
    name: 'Alaska Wilderness Expedition',
    destination: 'Alaska',
    region: 'Alaska',
    departurePort: 'Seattle, WA',
    duration: 10,
    price: 1299,
    originalPrice: 1699,
    priceLabel: 'per person',
    fanCashEarn: 65,
    fanCashRate: '5% back in FanCash',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80',
      'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80',
      'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 987,
    highlights: ['Glacier Bay', 'Wildlife Spotting', 'Expert Naturalist Guides', 'Kayaking Excursions'],
    description: 'Experience the raw, breathtaking beauty of Alaska on this 10-night expedition cruise. From towering glaciers to breaching whales, this is the adventure of a lifetime. Departs from Seattle — perfect for fans attending Seahawks or Mariners games beforehand.',
    itinerary: [
      { day: 1, port: 'Seattle, WA', description: 'Embarkation Day', depart: '5:00 PM' },
      { day: 2, port: 'At Sea — Inside Passage', description: 'Scenic cruising through the spectacular Inside Passage' },
      { day: 3, port: 'Juneau, AK', description: "Alaska's capital — Mendenhall Glacier and whale watching", arrive: '7:00 AM', depart: '8:00 PM' },
      { day: 4, port: 'Skagway, AK', description: 'Historic gold rush town, White Pass Railway excursion', arrive: '6:30 AM', depart: '8:30 PM' },
      { day: 5, port: 'Glacier Bay', description: 'Full day glacier viewing — breathtaking tidewater glaciers' },
      { day: 6, port: 'Sitka, AK', description: 'Russian heritage, wildlife sanctuary, sea otters', arrive: '8:00 AM', depart: '6:00 PM' },
      { day: 7, port: 'Ketchikan, AK', description: 'Totem poles, salmon fishing, rainforest trails', arrive: '7:00 AM', depart: '4:00 PM' },
      { day: 8, port: 'At Sea', description: 'Relaxation day, onboard enrichment lectures, chef dinners' },
      { day: 9, port: 'Victoria, BC', description: 'Elegant British Columbia city, Butchart Gardens', arrive: '1:00 PM', depart: '11:00 PM' },
      { day: 10, port: 'Seattle, WA', description: 'Disembarkation', arrive: '7:00 AM' },
    ],
    included: ['All meals & specialty dining', 'Naturalist-guided excursions', 'Entertainment', 'Port fees', 'FanCash credit'],
    notIncluded: ['Flights to Seattle', 'Optional adventure excursions', 'Alcoholic beverages', 'Gratuities'],
    provider: 'Premium Cruise Line',
    badge: 'Fan Favorite',
    sportsTie: 'Seattle Seahawks, Seattle Mariners',
    departureDates: ['Jun 20, 2026', 'Jul 4, 2026', 'Jul 18, 2026', 'Aug 1, 2026'],
    cabinTypes: [
      { name: 'Interior Cabin', price: 1299, description: 'Comfortable cabin for the budget-conscious explorer', maxGuests: 4 },
      { name: 'Ocean View', price: 1599, description: 'Never miss a glacier sighting from your cabin window', maxGuests: 4 },
      { name: 'Verandah Suite', price: 2199, description: 'Private verandah — perfect for wildlife spotting', maxGuests: 4 },
    ],
  },
  {
    id: 'mediterranean-12',
    type: 'cruise',
    name: 'Mediterranean Champions Tour',
    destination: 'Mediterranean',
    region: 'Europe',
    departurePort: 'Barcelona, Spain',
    duration: 12,
    price: 1899,
    priceLabel: 'per person',
    fanCashEarn: 95,
    fanCashRate: '5% back in FanCash',
    image: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=1200&q=80',
      'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1200&q=80',
      'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80',
    ],
    rating: 4.7,
    reviewCount: 1456,
    highlights: ['12 Iconic Ports', 'Rome, Athens, Santorini', 'UEFA Stadium Tours', 'Wine & Culinary Experiences'],
    description: 'Tour the cradle of sports history on this 12-night Mediterranean cruise. From the Roman Colosseum to the Nou Camp in Barcelona, this voyage blends world-class sightseeing with exclusive UEFA stadium tours. Earn premium FanCash on every port of call.',
    itinerary: [
      { day: 1, port: 'Barcelona, Spain', description: 'Embarkation — Explore Las Ramblas before departure', depart: '6:00 PM' },
      { day: 2, port: 'Marseille, France', description: 'Gateway to Provence — lavender fields and seaside charm', arrive: '8:00 AM', depart: '6:00 PM' },
      { day: 3, port: 'Rome (Civitavecchia), Italy', description: 'The Colosseum, Vatican, and Trevi Fountain', arrive: '7:00 AM', depart: '8:00 PM' },
      { day: 4, port: 'Naples, Italy', description: 'Pompeii ruins and Amalfi Coast scenic drive', arrive: '8:00 AM', depart: '7:00 PM' },
      { day: 5, port: 'At Sea', description: 'Spa day, cooking class, cocktail-making workshops' },
      { day: 6, port: 'Santorini, Greece', description: 'Iconic whitewashed cliffs, sunset in Oia', arrive: '7:00 AM', depart: '9:00 PM' },
      { day: 7, port: 'Athens (Piraeus), Greece', description: 'The Acropolis, Parthenon, and Olympic Stadium', arrive: '6:00 AM', depart: '6:00 PM' },
      { day: 8, port: 'Mykonos, Greece', description: 'Windmills, boutiques, and beautiful beaches', arrive: '7:00 AM', depart: '8:00 PM' },
      { day: 9, port: 'Dubrovnik, Croatia', description: 'The Pearl of the Adriatic — city walls and Game of Thrones filming locations', arrive: '7:00 AM', depart: '6:00 PM' },
      { day: 10, port: 'Venice, Italy', description: 'Full day in the floating city — gondolas and St. Mark\'s Square', arrive: '7:00 AM', depart: '11:00 PM' },
      { day: 11, port: 'At Sea', description: 'Final full day — farewell gala dinner and entertainment' },
      { day: 12, port: 'Barcelona, Spain', description: 'Disembarkation', arrive: '7:00 AM' },
    ],
    included: ['All meals & premium dining', 'UNESCO site guided tours', 'Entertainment & shows', 'Port fees', 'FanCash credit'],
    notIncluded: ['International flights', 'Stadium tour tickets (optional)', 'Alcoholic beverages', 'Gratuities'],
    provider: 'Premium Cruise Line',
    badge: 'New Route',
    sportsTie: 'Soccer / UEFA Champions League',
    departureDates: ['May 30, 2026', 'Jun 13, 2026', 'Jun 27, 2026', 'Jul 11, 2026'],
    cabinTypes: [
      { name: 'Interior Cabin', price: 1899, description: 'All the essentials for a great European adventure', maxGuests: 4 },
      { name: 'Sea View', price: 2399, description: 'Panoramic ocean views across the Mediterranean', maxGuests: 4 },
      { name: 'Balcony Suite', price: 3199, description: 'Wake up to Greek islands from your private balcony', maxGuests: 4 },
      { name: 'Penthouse', price: 4799, description: 'Top-deck luxury with butler service and private dining', maxGuests: 6 },
    ],
  },
  {
    id: 'bahamas-resort',
    type: 'resort',
    name: 'Atlantis Bahamas Fan Retreat',
    destination: 'Nassau, Bahamas',
    region: 'Caribbean',
    duration: 5,
    price: 699,
    originalPrice: 899,
    priceLabel: 'per person',
    fanCashEarn: 35,
    fanCashRate: '5% back in FanCash',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=1200&q=80',
      'https://images.unsplash.com/photo-1615880484746-a134be9a6ecf?w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
    ],
    rating: 4.6,
    reviewCount: 3241,
    highlights: ['5-Star Beachfront Resort', 'Waterpark Access', 'Aquarium', 'Casino & Nightlife'],
    description: 'Experience the legendary Atlantis Paradise Island — a world-class resort destination perfect for sports fans and families alike. Featuring one of the Caribbean\'s largest waterparks, stunning beaches, and a championship golf course.',
    itinerary: [
      { day: 1, port: 'Nassau, Bahamas', description: 'Arrival and check-in — beach and pool day' },
      { day: 2, port: 'Nassau, Bahamas', description: 'Aquaventure Waterpark, Dig archaeological attraction' },
      { day: 3, port: 'Nassau, Bahamas', description: 'Snorkeling, water sports, beach volleyball' },
      { day: 4, port: 'Nassau, Bahamas', description: 'Golf, spa day, casino night' },
      { day: 5, port: 'Nassau, Bahamas', description: 'Final morning beach — checkout and departure' },
    ],
    included: ['Resort accommodations', 'Waterpark access', 'Beach access', 'Fitness center', 'FanCash credit'],
    notIncluded: ['Flights', 'Meals (multiple dining options available)', 'Casino credits', 'Premium activities'],
    provider: 'Atlantis Paradise Island',
    badge: 'Top Rated',
    sportsTie: 'NBA Summer League events',
    departureDates: ['Jun 7, 2026', 'Jun 21, 2026', 'Jul 5, 2026', 'Jul 19, 2026', 'Aug 2, 2026'],
    roomTypes: [
      { name: 'Coral Tower Room', price: 699, description: 'Comfortable room with resort amenities', maxGuests: 4 },
      { name: 'Beach Tower Room', price: 899, description: 'Closer to the beach action', maxGuests: 4 },
      { name: 'Royal Tower Suite', price: 1399, description: 'Iconic tower suite with panoramic ocean views', maxGuests: 4 },
    ],
  },
  {
    id: 'hawaii-adventure',
    type: 'adventure',
    name: 'Hawaii Islands Fan Experience',
    destination: 'Hawaii',
    region: 'Hawaii',
    duration: 8,
    price: 1199,
    priceLabel: 'per person',
    fanCashEarn: 60,
    fanCashRate: '5% back in FanCash',
    image: 'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1542259009477-d625272157b7?w=1200&q=80',
      'https://images.unsplash.com/photo-1548712443-bba8b1f9a1c0?w=1200&q=80',
      'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1200&q=80',
    ],
    rating: 4.9,
    reviewCount: 1872,
    highlights: ['3 Islands', 'Volcano National Park', 'Surfing Lessons', 'Luau Experience'],
    description: 'Island-hop through paradise on this epic 8-day Hawaii experience. From the volcanic landscapes of the Big Island to the surfing culture of Oahu, this trip pairs perfectly with attending a Hawaii Bowl game or Pro Bowl weekend.',
    itinerary: [
      { day: 1, port: 'Honolulu, Oahu', description: 'Arrival — Waikiki Beach, explore the city' },
      { day: 2, port: 'Oahu', description: 'North Shore surfing, Dole Plantation, Polynesian Cultural Center' },
      { day: 3, port: 'Oahu', description: 'Pearl Harbor memorial, Iolani Palace, hiking Diamond Head' },
      { day: 4, port: 'Maui', description: 'Inter-island flight — Road to Hana, Haleakala sunrise' },
      { day: 5, port: 'Maui', description: 'Whale watching (seasonal), snorkeling Molokini Crater' },
      { day: 6, port: 'Big Island', description: 'Inter-island flight — Volcano National Park' },
      { day: 7, port: 'Big Island', description: 'Manta ray snorkeling, Kona coffee plantation tour' },
      { day: 8, port: 'Honolulu, Oahu', description: 'Return flight — aloha farewell' },
    ],
    included: ['Inter-island flights', 'Hotel accommodations (4-star)', 'Guided volcano tour', 'Luau dinner', 'FanCash credit'],
    notIncluded: ['Mainland flights', 'Most meals', 'Surf lessons (optional add-on)', 'Rental car'],
    provider: 'Hawaii Aloha Travel',
    badge: 'Elevated FanCash',
    sportsTie: 'Pro Bowl, Hawaii Bowl',
    departureDates: ['Jun 6, 2026', 'Jun 20, 2026', 'Jul 4, 2026', 'Jul 18, 2026'],
    roomTypes: [
      { name: 'Standard Hotel Room', price: 1199, description: '3 islands, 4-star hotels throughout', maxGuests: 2 },
      { name: 'Deluxe Ocean View', price: 1599, description: 'Premium ocean-view rooms on all 3 islands', maxGuests: 2 },
    ],
  },
  {
    id: 'mexico-riviera',
    type: 'cruise',
    name: 'Mexican Riviera Fanatics Getaway',
    destination: 'Mexico',
    region: 'Mexico',
    departurePort: 'Los Angeles, CA',
    duration: 7,
    price: 749,
    priceLabel: 'per person',
    fanCashEarn: 38,
    fanCashRate: '5% back in FanCash',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80',
      'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    ],
    rating: 4.5,
    reviewCount: 2089,
    highlights: ['Cabo San Lucas', 'Mazatlán', 'Puerto Vallarta', 'Zip-line Adventures'],
    description: 'Cruise down the Mexican Riviera from Los Angeles — perfect for LA Lakers and Dodgers fans looking for a post-season getaway. Hit the beaches of Cabo, explore colonial Mazatlán, and zip-line through the jungle in Puerto Vallarta.',
    itinerary: [
      { day: 1, port: 'Los Angeles, CA', description: 'Embarkation from LA', depart: '4:00 PM' },
      { day: 2, port: 'At Sea', description: 'Pool day, sports bar, live entertainment' },
      { day: 3, port: 'Cabo San Lucas, Mexico', description: 'El Arco, beach clubs, glass-bottom boat tours', arrive: '7:00 AM', depart: '5:00 PM' },
      { day: 4, port: 'Mazatlán, Mexico', description: 'Historic Old Town, cliffdiving, Golden Zone beaches', arrive: '8:00 AM', depart: '6:00 PM' },
      { day: 5, port: 'Puerto Vallarta, Mexico', description: 'Zip-lining, jungle ATV tours, tequila tasting', arrive: '7:00 AM', depart: '10:00 PM' },
      { day: 6, port: 'At Sea', description: 'Final sea day — farewell dinner and show' },
      { day: 7, port: 'Los Angeles, CA', description: 'Disembarkation', arrive: '7:00 AM' },
    ],
    included: ['All meals onboard', 'Entertainment', 'Port fees', 'FanCash credit'],
    notIncluded: ['Flights to LA', 'Shore excursions', 'Alcoholic beverages', 'Gratuities'],
    provider: 'Premium Cruise Line',
    sportsTie: 'LA Lakers, LA Dodgers, LA Rams',
    departureDates: ['Jun 13, 2026', 'Jun 27, 2026', 'Jul 11, 2026', 'Aug 8, 2026'],
    cabinTypes: [
      { name: 'Interior Cabin', price: 749, description: 'Everything you need for a great Mexican getaway', maxGuests: 4 },
      { name: 'Ocean View', price: 949, description: 'Watch the coastline of Mexico from your cabin', maxGuests: 4 },
      { name: 'Balcony', price: 1249, description: 'Private outdoor space for sunset cocktails', maxGuests: 4 },
    ],
  },
]

export const regions = ['All', 'Caribbean', 'Alaska', 'Europe', 'Mexico', 'Hawaii']
export const durations = ['Any', '3-5 nights', '6-9 nights', '10+ nights']
export const types = ['All', 'Cruises', 'Resorts', 'Adventures']

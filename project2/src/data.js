// const API_KEY = "GnloiEy5Obcp0Z0dDikvxUf6krTNEQtF";
// https://tih-api.stb.gov.sg/content/v1/search/all?dataset=${dataset}&language=en&apikey=${API_KEY}

const dataArray = [
  [
    "accommodation",
    "attractions",
    "bars_clubs",
    "cruises",
    "event",
    "food_beverages",
    "precincts",
    "shops",
    "tour",
    "venue",
    "walking_trail",
  ],
  {
    accommodation: [
      "Backpacker Hostels",
      "Hotels",
      "Resorts",
      "Serviced Apartments",
      "Others",
    ],
  },
  {
    attractions: [
      "Adventure",
      "Arts",
      "Fitness and Holistic Wellness",
      "History & Culture",
      "Leisure & Recreation",
      "Nature & Wildlife",
      "Others",
    ],
  },
  { "bars-clubs": ["bars", "Clubs", "Others"] },
  { cruises: ["Contemporary", "Luxury", "Premium", "Others"] },
  {
    event: [
      "Arts",
      "Attractions",
      "Entertainment",
      "Food & Beverages",
      "History & Culture",
      "MICE",
      "Nature & Wildlife",
      "Shopping",
      "Sports",
      "Others",
    ],
  },
  { food_beverages: ["Cafe", "Hawker Centres", "Restaurants", "Others"] },
  { precincts: [] },
  {
    shops: [
      "Bazaars & Flea Markets",
      "Boutiques",
      "Department Stores",
      "Malls",
      "Others",
    ],
  },
  {
    tour: [
      "Adventure & Sports",
      "Arts",
      "Food & Beverages",
      "History & Culture",
      "In-House",
      "Multi-Day Packages",
      "Nature & Wildlife",
      "Sightseeing",
      "Others",
    ],
  },
  { venue: ["Arts & Entertainment", "MICE", "Sports", "Others"] },
  {
    walking_trail: [
      "Arts",
      "Events & Festivities",
      "Food & Beverages",
      "History & Culture",
      "See & Do",
      "Shops",
      "Others",
    ],
  },
];

export default dataArray;

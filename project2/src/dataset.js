const datasetArray = [
  // dataset : inside url
  {
    dataset: "accommodation",
    urlvalue: "accommodation",
    search:
      "Backpacker%20Hostels%2C%20Hotels%2C%20Resorts%2C%20Serviced%20Apartments%2C%20Others",
    header: "Places to Stay",
    selection: [
      "Backpacker Hostels",
      "Hotels",
      "Resorts",
      "Serviced Apartments",
      "Others",
    ],
  },
  {
    dataset: "attractions",
    urlvalue: "attractions",
    search:
      "Adventure%2C%20Arts%2C%20Fitness%20and%20Holistic%20Wellness%2C%20History%20%26%20Culture%2C%20Leisure%20%26%20Recreation%2C%20Nature%20%26%20Wildlife%2C%20Others",
    header: "Attractions",
    selection: [
      "Adventure",
      "Arts",
      "Fitness and Holistic Wellness",
      "History & Culture",
      "Leisure & Recreation",
      "Nature & Wildlife",
      "Others",
    ],
  },
  {
    dataset: "bars_clubs",
    urlvalue: "bars-clubs",
    search: "bars%2C%20clubs%2C%20others",
    header: "Bars & Clubs",
    selection: ["bars", "Clubs", "Others"],
  },
  {
    dataset: "cruises",
    urlvalue: "cruises",
    search: "Contemporary%2C%20Luxury%2C%20Premium%2C%20Others",
    header: "Cruises",
    selection: ["Contemporary", "Luxury", "Premium", "Others"],
  },
  {
    dataset: "event",
    urlvalue: "event",
    search:
      "Arts%2C%20Attractions%2C%20Entertainment%2C%20Food%20%26%20Beverages%2C%20History%20%26%20Culture%2C%20MICE%2C%20Nature%20%26%20Wildlife%2C%20Shopping%2C%20Sports%2C%20Others",
    header: "Upcoming Events",
    selection: [
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
  {
    dataset: "food_beverages",
    urlvalue: "food-beverages",
    search: "Cafe%2C%20Hawker%20Centres%2C%20Restaurants%2C%20Others",
    header: "F&Bs",
    selection: ["Cafe", "Hawker Centres", "Restaurants", "Others"],
  },
  // { dataset: "precincts", urlvalue: "precincts" },
  {
    dataset: "shops",
    urlvalue: "shops",
    search: "",
    header: "Shopping",
    selection: [
      "Bazaars & Flea Markets",
      "Boutiques",
      "Department Stores",
      "Malls",
      "Others",
    ],
  },
  {
    dataset: "tour",
    urlvalue: "tour",
    search: "",
    header: "Tours",
    selection: [
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
  {
    dataset: "venue",
    urlvalue: "venue",
    selection: ["Arts & Entertainment", "MICE", "Sports", "Others"],
  },
  {
    dataset: "walking_trail",
    urlvalue: "walking-trail",
    search:
      "Arts%2C%20Events%20%26%20Festivities%2C%20Food%20%26%20Beverages%2C%20History%20%26%20Culture%2C%20See%20%26%20Do%2C%20Shops%2C%20Others",
    header: "Walk ",
    selection: [
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
export default datasetArray;

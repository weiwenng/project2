# Explore Singapore App

SEI 36 - Project 2

## Overview

Website created using Vite and Material-UI using data fetched from [Tourism Info Hub (TIH)](https://tih-dev.stb.gov.sg/content-api/apis).

[Click here to view the live version.](https://sunnyisland.vercel.app/)

## Features

- Provides relevant Singapore destination information to Singaporeans or overseas visitors to facilitate planning
  - Upcoming Events
  - Accommodation, Bars & Clubs, Food & Beverages
  - Walking Trails, Attractions, Cruises
  - Shops, Tours
- Favourites Page

### Packages

- [Vite](https://vitejs.dev/)
- [Material UI](https://material-ui.com/)

<!-- ## Tourism Info Hub API

You will need to register a developers account / businesses account to use their API. [Click here to go to their portal.](https://tih.stb.gov.sg/content/tih/en/home.html)

- Content API
 -->
## WireFrames

#### Home Page

![WireFrame - Home](https://user-images.githubusercontent.com/103851181/172045489-c4245ac5-85b1-459d-8437-3ebbd11b29b6.jpg)

#### Display Page

![WireFrame - Display](https://user-images.githubusercontent.com/103851181/172045491-8ce7b7b2-4a11-4dd1-b179-11abe0adc175.jpg)

#### Details Page

![WireFrame - Details](https://user-images.githubusercontent.com/103851181/172048754-f19ce7fa-c3b9-4be4-8bf4-0d2e13610348.jpg)

## User Stories

User must be able to:

- Search for things to do
- Select different categories
- See information relevant to the categories
- Keep in favourites

* Home Page

  - Search component / Click on tabs to visit pages
  - Path - /

* Categories:

  - Events & Tours & Cruises
  - Attractions & Walking Trails,
  - Food & Beverages, Bars & Clubs
  - Precincts?, Venues?, Shops
  - Accommodations
  - Path - /:dataset

* Details:
  - Details with Images
  - Path - /:dataset/:id
* Fav Page - with fav things included
  - Path - /favourites

## Code & Code Design

![Code Design](https://user-images.githubusercontent.com/103851181/172047839-65303301-f592-44b9-86d6-052522a73385.png)

## Stretch Goals (to add on in future)

- Calendar component in the Events Page:
  - user to select start date & end date
  - events that happen within selected date range will be displayed
- Details - Add Tags & Filter by Tags
  - Click on Tags to see everything tagged with this /:tags

## Credits

- Sun Icon from Icon Packs
- [Tourism Info Hub (TIH)](https://tih-dev.stb.gov.sg/content-api/apis)

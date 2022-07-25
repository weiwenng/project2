import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import {
  EventOutlined,
  LocalDiningRounded,
  ShoppingCartRounded,
  Attractions,
  Hotel,
  ForestRounded,
  LocalBarRounded,
  FavoriteBorderRounded,
  DirectionsBoat,
  LocationOnRounded,
  TourRounded,
} from "@mui/icons-material";
import Search from "../components/Search";
import Icon from "../components/Icon";

const Home = ({ favs, removeFavs, handleFavs }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="home">
        <img
          id="sunnyicon"
          src="https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png"
          alt="sun"
          height="35"
        />{" "}
        <h1>Sunny Island</h1>
      </nav>
      <div className="icon-list">
        <Icon link="bars_clubs" iconName="chillDrink" iconImage={<LocalBarRounded sx={{ fontSize:60}}/>} />
        <Icon link="attractions" iconName="seeStuff" iconImage={<Attractions sx={{ fontSize: 60 }} />} />
        <Icon link="event" iconName="doStuff" iconImage={<EventOutlined sx={{ fontSize: 60 }} />} />
        <Icon link="shops" iconName="buyStuff" iconImage={<ShoppingCartRounded sx={{ fontSize: 60 }} />} />
        <Icon link="food_beverages" iconName="yumCha" iconImage={<LocalDiningRounded sx={{ fontSize: 60 }} />} />
        <Icon link="cruises" iconName="cruises" iconImage={<DirectionsBoat sx={{ fontSize: 60 }} />} />
        <Icon link="walking_trail" iconName="walkWalk" iconImage={<ForestRounded sx={{ fontSize: 60 }} />} />
        <Icon link="accommodation" iconName="goodNight" iconImage={<Hotel sx={{ fontSize: 60 }} />} />
        <Icon link="venue" iconName="venue" iconImage={<LocationOnRounded sx={{ fontSize: 60 }} />} />
        <Icon link="tour" iconName="tours" iconImage={<TourRounded sx={{ fontSize: 60 }} />} />
        <Icon link="favourites" iconName="myLoves" iconImage={<FavoriteBorderRounded sx={{ fontSize: 60 }} />} />
      </div>
      <div className="search">
        <Search favs={favs} handleFavs={handleFavs} removeFavs={removeFavs} />
      </div>
    </>
  );
};

export default Home;
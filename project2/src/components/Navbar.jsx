import { Link, useNavigate } from "react-router-dom";
import { EventOutlined, LocalDiningRounded, Hotel, ForestRounded, LocalBarRounded, FavoriteBorderRounded, LocationOnRounded, DirectionsBoat, Attractions, ShoppingCartRounded, TourRounded } from '@mui/icons-material'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <Link to="/">
                <img src="https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png" alt="sun" height="35" />{" "}
                <h1>Sunny Island</h1>
            </Link>
            {/* <Link to="/things">Things To Do</Link> */}
            <Link to="/bars_clubs"> <div className="navicon"><LocalBarRounded sx={{ fontSize: 20 }} /></div> NightLife</Link>
            <Link to="/attractions"> <div className="navicon"><Attractions sx={{ fontsize: 20}} /></div> Attractions</Link>
            <Link to="/event"> <div className="navicon"><EventOutlined sx={{ fontSize: 20 }} /></div> Events</Link>
            <Link to="/shops"> <div className="navicon"><ShoppingCartRounded sx={{ fontSize: 20}} /></div> Shops</Link>
            <Link to="/food_beverages"> <div className="navicon"><LocalDiningRounded sx={{ fontSize: 20 }} /></div> Dining</Link>
            <Link to="/cruises"> <div className="navicon"><DirectionsBoat sx={{ fontSize: 20 }} /></div> Cruises</Link>
            <Link to="/walking_trail"> <div className="navicon"><ForestRounded sx={{ fontSize: 20 }} /></div> Walk-Walk</Link>
            <Link to="/accommodation"> <div className="navicon"><Hotel sx={{ fontSize: 20 }} /></div> Accoms</Link>
            <Link to="/venue"> <div className="navicon"><LocationOnRounded sx={{ fontSize: 20 }} /></div> Venue</Link>
            <Link to="/tour"> <div className="navicon"><TourRounded sx={{ fontSize: 20 }} /></div> Tours</Link>
            <FavoriteBorderRounded className="navFav"  onClick={() => navigate("/favourites")} />
        </nav>
    )
}

export default Navbar;

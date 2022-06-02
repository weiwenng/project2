import { Link, useNavigate } from "react-router-dom";
import { FavoriteBorderRounded } from '@mui/icons-material'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav>
            <Link to="/">
                <img src="https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png" alt="sun" height="35" />{" "}
                <h1>Sunny Island</h1>
            </Link>
            {/* <Link to="/things">Things To Do</Link> */}
            <Link to="/bars_clubs">NightLife</Link>
            <Link to="/event">Events</Link>
            <Link to="/food_beverages">Dining</Link>
            <Link to="/cruises">Cruises</Link>
            <Link to="/walking_trail">Walk-Walk</Link>
            <Link to="/accommodation">Accoms</Link>
            <FavoriteBorderRounded sx={{ position: "absolute", right: 0, paddingRight: 3 }} onClick={() => navigate("/favourites")} />
        </nav>
    )
}

export default Navbar;
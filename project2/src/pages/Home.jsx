import { useNavigate } from 'react-router-dom'
import { Card, CardContent, Typography } from '@mui/material';
import { EventOutlined, LocalDiningRounded, Hotel, ForestRounded, LocalBarRounded, FavoriteBorderRounded, DirectionsBoat, LocationOnRounded } from '@mui/icons-material'
import Search from '../components/Search';

const Home = ({favs, removeFavs, handleFavs}) => {
    const navigate = useNavigate()
    return (
        <>
            <nav className="home">
                <img id="sunnyicon" src="https://www.iconpacks.net/icons/2/free-sun-icon-1846-thumb.png" alt="sun" height="35" />{" "}
                <h1>Sunny Island</h1>
            </nav>
            <div className="icon-list">
                <Card className="card" onClick={() => navigate("/event")}>
                    <CardContent>
                        <Typography>
                            <EventOutlined sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            doStuff
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/walking_trail")}>
                    <CardContent>
                        <Typography>
                            <ForestRounded sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            walkWalk
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/venue")}>
                    <CardContent>
                        <Typography>
                            <LocationOnRounded sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            venue
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/food_beverages")}>
                    <CardContent>
                        <Typography>
                            <LocalDiningRounded sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            yumCha
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/cruises")}>
                    <CardContent>
                        <Typography>
                            <DirectionsBoat sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            cruises
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/bars_clubs")}>
                    <CardContent>
                        <Typography>
                            <LocalBarRounded sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            chillDrink
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/accommodation")}>
                    <CardContent>
                        <Typography>
                            <Hotel sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            goodNight
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="card" onClick={() => navigate("/favourites")}>
                    <CardContent>
                        <Typography>
                            <FavoriteBorderRounded sx={{ fontSize: 60 }} />
                        </Typography>
                        <Typography>
                            myLoves
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            <div className="search">
                <Search favs={favs} handleFavs={handleFavs} removeFavs={removeFavs}/>
            </div>
            {/* </Card> */}

        </>
    )
}

export default Home;

// import Navbar from "../components/Navbar";
// import dataArray from "../data";
// import MainEvents from "./MainEvents";

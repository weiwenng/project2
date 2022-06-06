import Navbar from "../components/Navbar"
import FavsCard from "../components/FavsCard"

const Favourites = ({removeFavs, favs}) => {

    return (
       <>
        <Navbar />
        <h1 className="header">Favourites</h1>
            <div className="fav-list">
        {favs.map((fav, index) => <FavsCard key={index} index={index} id={fav.id} dataset={fav.dataset} removeFavs={removeFavs}/>)}
        </div>
        </>
    )
}

export default Favourites

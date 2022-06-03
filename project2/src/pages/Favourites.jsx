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

// import { useState } from "react"
// const [ link, setLink ] = useState([])
// const API_KEY = import.meta.env.VITE_API_KEY
   // favs.map((fav) => {
    //     if(fav.dataset === "event") {
    //     setLink([...link,`https://tih-api.stb.gov.sg/content/v1/event?uuid=${fav.id}&language=en&apikey=${API_KEY}`])
    //     } else if (fav.dataset === "bars_clubs") {
    //     setLink([...link,`https://tih-api.stb.gov.sg/content/v1/bars-clubs?uuid=${fav.id}&language=en&apikey=${API_KEY}`])
    //     }
    //     return link;
    // })

    

    // const link = `https://tih-api.stb.gov.sg/content/v1/${Object.keys(dataArray[3])}/search?keyword=${dataArray[3]["bars-clubs"][0]}&language=en&apikey=${API_KEY}`
import Navbar from "../components/Navbar"
import FavsCard from "../components/FavsCard"
import { useState } from "react"

const Favourites = ({removeFavs, favs}) => {
    // const [ link, setLink ] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY
    
    // favs.map((fav) => {
    //     if(fav.dataset === "event") {
    //     setLink([...link,`https://tih-api.stb.gov.sg/content/v1/event?uuid=${fav.id}&language=en&apikey=${API_KEY}`])
    //     } else if (fav.dataset === "bars_clubs") {
    //     setLink([...link,`https://tih-api.stb.gov.sg/content/v1/bars-clubs?uuid=${fav.id}&language=en&apikey=${API_KEY}`])
    //     }
    //     return link;
    // })

    

    // const link = `https://tih-api.stb.gov.sg/content/v1/${Object.keys(dataArray[3])}/search?keyword=${dataArray[3]["bars-clubs"][0]}&language=en&apikey=${API_KEY}`
    return (
       <>
        <Navbar />
        <h1 className="header">Favourites</h1>
            <div className="card-list">
        {favs.map((fav) => <FavsCard key={fav.id} id={fav.id} dataset={fav.dataset}/>)}
        </div>
        </>
    )
}

export default Favourites
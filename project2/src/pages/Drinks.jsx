import Navbar from "../components/Navbar";
import { Button, Card } from "@mui/material"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import dataArray from "../data";
import DrinksCard from "../components/DrinksCard";
// import BasicCard from "../components/BasicCard"

const Drinks = ({ handleFavs }) => {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const API_KEY = import.meta.env.VITE_API_KEY
    const link = `https://tih-api.stb.gov.sg/content/v1/${Object.keys(dataArray[3])}/search?keyword=${dataArray[3]["bars-clubs"][0]}&language=en&apikey=${API_KEY}`

    useEffect(() => {
        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                setData(data)
                console.log(data)
            })
    }, [])


    return (
        <>
            <Navbar />
            <br />
            <div style={{ paddingLeft: 20 }}>
                <Button variant="outlined" onClick={() => navigate("/")}>Back to Home</Button>
            </div>
            <h1 className="header">Drinks</h1>
            <div className="card-list">
                {/* {data?.data?.map((item, index) => <BasicCard key={index} id={item.uuid} item={item} />)} */}
                {data?.data?.map((item, index) => <DrinksCard handleFavs={handleFavs} key={index} id={item.uuid} item={item} />)}
            </div>
        </>
    )
}

export default Drinks;
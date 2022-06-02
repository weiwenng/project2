import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import dataArray from "../data";
import BasicCard from "../components/BasicCard";
import DrinksCard from "../components/DrinksCard";
import datasetArray from "../dataset";

const Main = ({ favs, handleFavs }) => {
    // const [ like, setLike ] = useState(true)
    const { dataset } = useParams();
    const [data, setData] = useState(null)
    const [ header, setHeader ] = useState(null)
    const navigate = useNavigate()
    const API_KEY = import.meta.env.VITE_API_KEY
    
    let keyword = ""
    // let header = ""
    // const getKeyword = () => {
        useEffect(() => {
        for (let i = 0; i < datasetArray.length; i++) {
            if (dataset === datasetArray[i].dataset) {
                keyword = datasetArray[i].search
                setHeader(datasetArray[i].header)
                console.log("keyword", keyword)
            }
        }
            fetch(`https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset}/search?keyword=${keyword}&language=en&apikey=${API_KEY}`)
                .then((response) => response.json())
                .then((data) => {
                    setData(data?.data);
                    console.log(data)
    // console.log(`https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset}/search/keyword=${keyword}&language=en&apikey=${API_KEY}`)            
        })
        }, [dataset])

    // const handleClick = (event) => {
    //     // console.log(event.target.id)
    //     setLike(!like)
    //     // handleFavs(item.dataset, item.uuid)
    //     console.log(like)
    // }

    // }
    // getKeyword()

    return (
        <>
            <Navbar />
            <br />
            <div style={{ paddingLeft: 20 }}>
                <Button variant="outlined" onClick={() => navigate("/")}>Back to Home</Button>
            </div>
            <h1 className="header">{header}</h1>
            <div className="card-list">
                {data?.map((item, index) => <BasicCard handleFavs={handleFavs} key={index} id={item.uuid} item={item} favs={favs} dataset={dataset}/>)}
            </div>
        </>
    )

}

export default Main;
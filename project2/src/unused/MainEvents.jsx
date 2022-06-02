import { useState, useEffect } from 'react'
import dataArray from './data'
import Navbar from '../components/Navbar'
import BasicCard from '../components/BasicCard'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router'

const MainEvents = ({ handleFavs }) => {
    const [data, setData] = useState(null)
    const navigate = useNavigate();
    const API_KEY = import.meta.env.VITE_API_KEY
    const link = `https://tih-api.stb.gov.sg/content/v1/search/all?dataset=${Object.keys(dataArray[5])}&language=en&apikey=${API_KEY}`

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
            <h1 className="header">Upcoming Events</h1>
            <div className="card-list">
                {data?.data?.results.map((item, index) => <BasicCard handleFavs={handleFavs} key={index} id={item.uuid} item={item} />)}
            </div>

        </>
    )

}

export default MainEvents;

// { index + 1 } - { item.name } </BasicCard >

{/* <BasicCard key={index} item={item} /> */ }
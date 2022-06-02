import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import dataArray from '../data'
import { useLocation } from 'react-router-dom';

// import { Link } from "react-router-dom"
import { Box, Card, CardActions, CardMedia, CardContent, Button, Typography, Chip } from '@mui/material'
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Chip from '@mui/material/Chip';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);
// nextToken: "MNXW2LTTORRC45DJNAXGG33SMUXG233EMVWC4Q3PNZ2GK3TUKJSWMRDBORQVGZLUKNSWC4TDNBJGK43VNR2CKN2DEU3UGMRREU3UGJJXIMZDAJJXIMSTOQZSGASTOQZFG5BWWZLZO5XXEZBFGNCCKN2DEU3UGZDBORQXGZLUEUZUIZLWMVXHIJJXIMSTOQ3JONIHE2LWMF2GKJJTIRTGC3DTMUSTOQZFG5BXG33SORBHSJJTIQSTOQZFG5BXG33SORHXEZDFOISTGRBFG5BSKN2DNRQW4Z3VMFTWKJJTIRSW4JJXIMSTOQ3HOJXXK4BFGNCCKN2DEU3UG==="
const EventDetail = ({ data }) => {

    const { id } = useParams();
    const [eventDetail, setEventDetail] = useState([])
    const [drinksDetail, setDrinksDetail] = useState([])
    const navigate = useNavigate();
    // const [nextToken, setNextToken] = useState("")
    const API_KEY = import.meta.env.VITE_API_KEY
    const eventLink = `https://tih-api.stb.gov.sg/content/v1/event?uuid=${id}&language=en&apikey=${API_KEY}`
    const drinksLink = `https://tih-api.stb.gov.sg/content/v1/bars-clubs?uuid=${id}&language=en&apikey=${API_KEY}`
    useEffect(() => {

        fetch(eventLink)
            .then((response) => response.json())
            .then((data) => {
                setEventDetail(data?.data?.[0])
                console.log(data?.data[0])
                // setNextToken(data?.nextToken)
                // console.log(data.nextToken)
            })
    }, [id])

    useEffect(() => {
        fetch(drinksLink)
            .then((response) => response.json())
            .then((data) => {
                setDrinksDetail(data?.data[0])
                console.log(data?.data[0])
            })
    }, [id])

    // const imgsource = data?.data?.results[0].images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${data?.data.results[0].images[0]?.uuid}?apikey=${API_KEY}` : `${data?.data.results[0].images[0]?.url}`


    /*...*/

    const location = useLocation();
    const test = location.state;
    console.log("location", test);
    return (
        <>
            <Navbar />
            {/* <h1>{item}</h1> */}
            {/* <h2>{eventDetail?.data?.results[0].name}</h2> */}
            {/* <h2>{data.name}</h2> */}
            {/* <h2>{outing.description}</h2> */}
            {/* <h3>Nearest MRT Station: {eventDetail?.name}</h3>
            <h4>Price: {data?.data[0]?.price}</h4> */}
            {/* <h4>{data?.data?.results}</h4> */}
            <br />
            <div style={{ paddingLeft: 20 }}>
                <Button variant="outlined" onClick={() => navigate("/event")}>Back to Event Listing</Button>
                <Button></Button>
            </div>
            {/* <button className="button" onClick={() => navigate("/events")}>Back to Event Listing </button> */}
            <br />
            <br />
            <div className="card-list">
                <Card sx={{ maxWidth: "50rem" }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            {eventDetail?.name}
                        </Typography>
                        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>

                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {eventDetail?.nearestMrtStation === "" ? "" : `nearest MRT station: ${eventDetail?.nearestMrtStation}`}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">

                            {eventDetail?.price === "" ? "" : eventDetail?.price?.[0] === "$" ? `price: ${eventDetail?.price}` : `price: $${eventDetail?.price}`}
                        </Typography>

                        <Typography sx={{ mb: 0.5 }} color="text.secondary">
                            To find out more -
                            <br />
                            {/* link to external link */}
                            {eventDetail?.officialWebsite === "" ? "" : <a href={eventDetail?.officialWebsite} target="_blank">website</a>}
                        </Typography>
                        <Typography sx={{ mb: 0.5 }} color="text.secondary">
                            {eventDetail?.officialEmail === "" ? "" : `email: ${eventDetail?.officialEmail}`}
                        </Typography>
                        <Typography sx={{ mb: 0.5 }} color="text.secondary">
                            {eventDetail?.contact?.primaryContactNo === "" ? "" : `contact number: ${eventDetail?.contact?.primaryContactNo}`}
                        </Typography>
                        <Typography variant="body2">
                            {eventDetail?.body?.replace(/<[^>]+>/gm, `\n`)}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* {eventDetail?.tags.map((tag, index) => <Button key={index} size="small">{tag}</Button>)} */}
                    </CardActions>

                    {/* <Stack> */}
                    {/* {eventDetail?.tags.map((tag) => <Chip label={tag} size="small" />)} */}
                    {/* </Stack> */}
                </Card>
                <Card>
                    <CardMedia
                        component="img"
                        // max-width="25"
                        // max-height="25"
                        // image={eventDetail?.data?.results[0].images[0].url}
                        // image={item?.images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item?.images[0]?.url}`}
                        image={eventDetail?.images?.length === 0 ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg" : (eventDetail?.images?.[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${eventDetail?.images?.[0]?.uuid}?apikey=${API_KEY}` : `${eventDetail?.images?.[0]?.url}`)}
                        alt={eventDetail?.name}
                    />
                </Card>
            </div>
        </>
    )



}

export default EventDetail;

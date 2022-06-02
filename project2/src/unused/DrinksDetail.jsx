import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import dataArray from "../data";
// import { Link } from "react-router-dom"
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Chip,
} from "@mui/material";

// nextToken: "MNXW2LTTORRC45DJNAXGG33SMUXG233EMVWC4Q3PNZ2GK3TUKJSWMRDBORQVGZLUKNSWC4TDNBJGK43VNR2CKN2DEU3UGMRREU3UGJJXIMZDAJJXIMSTOQZSGASTOQZFG5BWWZLZO5XXEZBFGNCCKN2DEU3UGZDBORQXGZLUEUZUIZLWMVXHIJJXIMSTOQ3JONIHE2LWMF2GKJJTIRTGC3DTMUSTOQZFG5BXG33SORBHSJJTIQSTOQZFG5BXG33SORHXEZDFOISTGRBFG5BSKN2DNRQW4Z3VMFTWKJJTIRSW4JJXIMSTOQ3HOJXXK4BFGNCCKN2DEU3UG==="
const DrinksDetail = ({ data }) => {
  const { id } = useParams();
  // const [eventDetail, setEventDetail] = useState([])
  const [drinksDetail, setDrinksDetail] = useState([]);
  const navigate = useNavigate();
  // const [nextToken, setNextToken] = useState("")
  const API_KEY = import.meta.env.VITE_API_KEY;
  // const eventLink = `https://tih-api.stb.gov.sg/content/v1/event?uuid=${id}&language=en&apikey=${API_KEY}`
  const link = `https://tih-api.stb.gov.sg/content/v1/bars-clubs?uuid=${id}&language=en&apikey=${API_KEY}`;

  useEffect(() => {
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setDrinksDetail(data?.data[0]);
        console.log(data?.data[0]);
      });
  }, [id]);

  // const imgsource = data?.data?.results[0].images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${data?.data.results[0].images[0]?.uuid}?apikey=${API_KEY}` : `${data?.data.results[0].images[0]?.url}`

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
        <Button variant="outlined" onClick={() => navigate("/bar-clubs")}>
          Back to Drink Listing
        </Button>
        {/* <Button></Button> */}
      </div>
      {/* <button className="button" onClick={() => navigate("/events")}>Back to Event Listing </button> */}
      <br />
      <br />
      <div className="card-list">
        <Card sx={{ maxWidth: "50rem" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {drinksDetail?.name}
            </Typography>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            ></Typography>

            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {drinksDetail?.nearestMrtStation === ""
                ? ""
                : `nearest MRT station: ${drinksDetail?.nearestMrtStation}`}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              {drinksDetail?.rating === ""
                ? ""
                : `rating: ${drinksDetail?.rating} / 5`}
              {/* {drinksDetail?.price === "" ? "" : drinksDetail?.price?.[0] === "$" ? `price: ${drinksDetail?.price}` : `price: $${drinksDetail?.price}`} */}
            </Typography>

            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              To find out more -
              <br />
              {/* link to external link */}
              {drinksDetail?.officialWebsite === "" ? (
                ""
              ) : (
                <a href={drinksDetail?.officialWebsite} target="_blank">
                  website
                </a>
              )}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              {drinksDetail?.officialEmail === ""
                ? ""
                : `email: ${drinksDetail?.officialEmail}`}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              {drinksDetail?.contact?.primaryContactNo === ""
                ? ""
                : `contact number: ${drinksDetail?.contact?.primaryContactNo}`}
            </Typography>
            <Typography variant="body2">
              {drinksDetail?.body?.replace(/<[^>]+>/gm, `\n`)}
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
            image={
              drinksDetail?.images?.length === 0
                ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg"
                : drinksDetail?.images?.[0]?.url === ""
                  ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${drinksDetail?.images?.[0]?.uuid}?apikey=${API_KEY}`
                  : `${drinksDetail?.images?.[0]?.url}`
            }
            alt={drinksDetail?.name}
          />
        </Card>
      </div>
    </>
  );
};

export default DrinksDetail;

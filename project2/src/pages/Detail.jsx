import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";

const Detail = () => {
  const { dataset, id } = useParams();
  const [detail, setDetail] = useState([]);
  const navigate = useNavigate();
  const API_KEY = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    fetch(
      `https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset
      }?uuid=${id}&language=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetail(data?.data?.[0]);
        console.log(data?.data?.[0]);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <br />
      <div style={{ paddingLeft: 20 }}>
        <Button variant="outlined" onClick={() => navigate(`/${dataset}`)}>
          {`Back to Listing`}
        </Button>
      </div>
      <br />
      <br />
      <div className="card-list">
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {detail?.name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {dataset === "walking_trail" | detail?.nearestMrtStation === ""
                ? ""
                : `nearest MRT station: ${detail?.nearestMrtStation}`}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              {dataset === "event" | dataset === "walking_trail" | detail?.rating === "" ? "" : `rating: ${detail?.rating} / 5`}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              To find out more -
              <br />
              {/* link to external link */}
              {detail?.officialWebsite === "" ? (
                ""
              ) : (
                <a href={detail?.officialWebsite} target="_blank">
                  website
                </a>
              )}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              {detail?.officialEmail === ""
                ? ""
                : `email: ${detail?.officialEmail}`}
            </Typography>
            <Typography sx={{ mb: 0.5 }} color="text.secondary">
              {detail?.contact?.primaryContactNo === ""
                ? ""
                : `contact number: ${detail?.contact?.primaryContactNo}`}
            </Typography>
            <Typography variant="body2">
              {detail?.body?.replace(/<[^>]+>/gm, `\n`)}
            </Typography>
          </CardContent>
        </Card>
        <Card>
          <CardMedia
            component="img"
            image={
              detail?.images?.length === 0
                ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg"
                : detail?.images?.[0]?.url === ""
                  ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${detail?.images?.[0]?.uuid}?apikey=${API_KEY}`
                  : `${detail?.images?.[0]?.url}`
            }
            alt={detail?.name}
          />
        </Card>
      </div>
    </>
  );
};

export default Detail;


{/* <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            ></Typography> */}
 // max-width="25"
            // max-height="25"
            // image={eventDetail?.data?.results[0].images[0].url}
            // image={item?.images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item?.images[0]?.url}`}

             // const eventLink = `https://tih-api.stb.gov.sg/content/v1/event?uuid=${id}&language=en&apikey=${API_KEY}`
  // const drinksLink = `https://tih-api.stb.gov.sg/content/v1/bars-clubs?uuid=${id}&language=en&apikey=${API_KEY}`

  // console.log("test", dataset)
// import datasetArray from "../dataset";
{/* {detail?.price === "" ? "" : detail?.price?.[0] === "$" ? `price: ${detail?.price}` : `price: $${detail?.price}`} */ }
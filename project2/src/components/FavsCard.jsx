import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { FavoriteRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
const FavsCard = ({ id, dataset, removeFavs }) => {
  const [detail, setDetail] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY

  useEffect(() => {
    fetch(
      `https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset}?uuid=${id}&language=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        console.log("detail", data);
      });
  }, [id]);

  const imgsource =
    detail?.data?.[0].images?.[0]?.url === ""
      ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${detail?.data?.[0].images?.[0]?.uuid}?apikey=${API_KEY}`
      : `${detail?.data?.[0].images?.[0]?.url}`;

  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        <CardMedia // onClick={handleClick}
          component="img"
          width="25"
          height="200"
          image={detail?.data?.[0].images.length === 0 ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg" : imgsource}
          alt={detail?.data?.[0].name}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {detail?.data?.[0].name}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/${dataset}/${detail?.data?.[0].uuid}`}>
            <Button size="small">See More</Button>
          </Link>
          <FavoriteRounded onClick={() => removeFavs(id)} />
        </CardActions>
      </Card>
    </>
  );
};

export default FavsCard;

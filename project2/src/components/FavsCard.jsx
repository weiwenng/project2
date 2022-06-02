import {
  Box,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Chip,
} from "@mui/material";
import { FavoriteRounded, FavoriteBorderRounded } from "@mui/icons-material";
import { useEffect, useState } from "react";
const FavsCard = ({ id, dataset }) => {
  const [detail, setDetail] = useState([]);
  const API_KEY = import.meta.env.VITE_API_KEY;
  useEffect(() => {
       fetch(
      `https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset}?uuid=${id}&language=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetail(data);
        console.log(data);
      });
  }, [id]);

  return (
    <>
      <Card sx={{ maxWidth: 275 }}>
        {/* <CardMedia
                    // onClick={handleClick}
                    component="img"
                    width="25"
                    height="200"
                    // image={item?.images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item?.images[0]?.url}`}
                    image={item?.images.length === 0 ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg" : imgsource}
                    alt={item.name}
                /> */}
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {detail?.data?.[0].name}
          </Typography>
        </CardContent>
        <CardActions>
          {/* <Link to={`/nightlife/${item.uuid}`}> */}
          {/* <Link to={`${item.name}`}> */}
          <Button size="small">See More</Button>
          {/* </Link> */}
          {/* {like === true ? <FavoriteBorderRounded onClick={handleClick} /> : <FavoriteRounded onClick={handleClick} />} */}
        </CardActions>
        {/* {check === true | like === false ?
          // {like === true ?
          ( */}
            <FavoriteRounded/>
          {/* ) : (
            <FavoriteBorderRounded onClick={handleClick} />
          )} */}
        {/* <Stack>
                {item.tags.map((tag) => <Chip label={tag} size="small" />)}
            </Stack> */}
      </Card>
    </>
  );
};

export default FavsCard;

 // if (dataset === "event") {
    //   fetch(
    //     `https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset}?uuid=${id}&language=en&apikey=${API_KEY}`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setDetail(data?.data);
    //       console.log(detail);
    //     });
    // } else if (dataset === "bars_clubs") {
    //   fetch(
    //     `https://tih-api.stb.gov.sg/content/v1/bars-clubs?uuid=${id}&language=en&apikey=${API_KEY}`
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setDetail(data?.data?.[0]);
    //       console.log(detail);
    //     });
    // }
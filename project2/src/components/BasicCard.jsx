import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from "@mui/material";
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";

export default function BasicCard({ favs, handleFavs, item, removeFavs }) {
  const API_KEY = import.meta.env.VITE_API_KEY
  const imgsource =
    item?.images[0]?.url === ""
      ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}`
      : `${item?.images[0]?.url}`;
  return (
    <Card className="basic" sx={{ maxWidth: 275 }}>
      <CardMedia className="basicImg"  // onClick={handleClick}
        component="img"
        width="25"
        height="200"
        image={
          item?.images.length === 0
            ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg"
            : imgsource
        }
        alt={item.name}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/${item.dataset}/${item.uuid}`}>
          <Button size="small">See More</Button>
        </Link>
        {favs.some((fav) => fav.id === item.uuid) ?
          <FavoriteRounded onClick={() => removeFavs(item.uuid)} /> // favourited
          :
          <FavoriteBorderRounded onClick={() => handleFavs(item.dataset, item.uuid)} />  // not favourited
        }
      </CardActions>
    </Card>
  );
}

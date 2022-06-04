// import { useEffect, useState } from "react";
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
  const API_KEY = import.meta.env.VITE_API_KEY;
  const imgsource =
    item?.images[0]?.url === ""
      ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}`
      : `${item?.images[0]?.url}`;
  return (
    <Card className="basic" sx={{ maxWidth: 275 }}>
      <CardMedia  // onClick={handleClick}
        component="img"
        width="25"
        height="200"
        // image={item?.images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item?.images[0]?.url}`}
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
          {/* <Link to={`${item.name}`}> */}
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

// const [id, setId] = useState("")
// const [like, setLike] = useState(true);
// const [check, setCheck ] = useState(null)
// const imgsource = item.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item.url}`
{/* <Stack>
          {item.tags.map((tag) => <Chip label={tag} size="small" />)}
      </Stack> */}
//  <Typography variant="h5" component="div">
//                     be{bull}nev{bull}o{bull}lent
//                 </Typography>
//                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
//                     adjective
//                 </Typography>
//                 <Typography variant="body2">
//                     well meaning and kindly.
//                     <br />
//                     {'"a benevolent smile"'}
//                 </Typography>
   // { like === false
          // if its inside the favs array | onclick change to false
          // {like === true ?
                      // <button onClick={handleClick}>ADDED</button>


                        // console.log(item.images[0].url)

  // const handleClick = (event) => {
  //     console.log(event.target.id)
  //     setId(event.target.id)
  // }
  // useEffect(() => {
  //   for (let i = 0; i < favs.length; i++) {
  //     if (item.uuid === favs[i].id) {
  //       setCheck(true)
  //       setLike(false)
  //       return;
  //     } else {
  //       setCheck(false)
  //       setLike(true)
  //     }
  //   }
  // }, [dataset]
  // )


    // const handleClick = (event) => {
  //   event.preventDefault();
  //   // console.log(event.target.id)
  //   if (like === true) {
  //     // setLike(!like);
  //     handleFavs(item.dataset, item.uuid);
  //     console.log("favourited");
  //   } else {
  //     setLike(!like);
  //     removeFavs(item.uuid)
  //     console.log("unfavorited")
  //     // console.log(index)
  //     // removeFavs(index)
  //   }
  //   console.log(like);
  //   console.log(favs)
  // };

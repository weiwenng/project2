import { Link } from "react-router-dom"
import { useState } from "react";
import { Card, CardActions, CardMedia, CardContent, Button, Typography, Stack, Chip } from '@mui/material';
import { FavoriteBorderRounded, FavoriteRounded } from "@mui/icons-material";
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Stack from '@mui/material/Stack';
// import Chip from '@mui/material/Chip';

// const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
// );
// uuid: "00404f8284f32604a908b9cd84d221ad33a"

export default function DrinksCard({ handleFavs, item }) {
    // const [id, setId] = useState("")
    const API_KEY = import.meta.env.VITE_API_KEY
    // const imgsource = item.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item.url}`
    const imgsource = item?.images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item?.images[0]?.url}`
    // console.log(item.images[0].url)
    const [like, setLike] = useState(true)
    const handleClick = (event) => {
        // console.log(event.target.id)
        setLike(!like)
        handleFavs(item.dataset, item.uuid)
        console.log(like)
    }
    

    return (
        <Card sx={{ maxWidth: 275 }}>
            <CardMedia
                // onClick={handleClick}
                component="img"
                width="25"
                height="200"
                // image={item?.images[0]?.url === "" ? `https://tih-api.stb.gov.sg/media/v1/download/uuid/${item.images[0]?.uuid}?apikey=${API_KEY}` : `${item?.images[0]?.url}`}
                image={item?.images.length === 0 ? "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2016/05/gf70r2-1.jpg" : imgsource}
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
               {like === true ?  <FavoriteBorderRounded onClick={handleClick}/> : <FavoriteRounded onClick={handleClick} /> }
            </CardActions>
            {/* <Stack>
                {item.tags.map((tag) => <Chip label={tag} size="small" />)}
            </Stack> */}
        </Card>
    );
}

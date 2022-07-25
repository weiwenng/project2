import { useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";

const Icon = ({ link, iconName, iconImage}) => {
    const navigate = useNavigate();
    return (
        <Card className="card" onClick={() => navigate(`/${link}`)}>
            <CardContent>
                <Typography>
                    {iconImage}
                </Typography>
                <Typography>{iconName}</Typography>
            </CardContent>
        </Card>
    )
}

export default Icon;
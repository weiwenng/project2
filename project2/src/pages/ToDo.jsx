import { Button, Card } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

const ToDo = () => {

    const navigate = useNavigate()
    return (
        <>
            <Navbar />
            <br />
            <div style={{ paddingLeft: 20 }}>
                <Button variant="outlined" onClick={() => navigate("/")}>Back to Home</Button>
            </div>
            <h1 className="header">Things</h1>
            <Card />
        </>
    )
}

export default ToDo
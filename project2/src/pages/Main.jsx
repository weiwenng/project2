import Navbar from "../components/Navbar";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BasicCard from "../components/BasicCard";
import datasetArray from "../dataset";


const Main = ({ favs, handleFavs, removeFavs }) => {
  const { dataset } = useParams();
  const [data, setData] = useState(null);
  const [header, setHeader] = useState(null);
  const navigate = useNavigate();
  const API_KEY = "GnloiEy5Obcp0Z0dDikvxUf6krTNEQtF"

  let keyword = "";
  useEffect(() => {
    for (let i = 0; i < datasetArray.length; i++) {
      if (dataset === datasetArray[i].dataset) {
        keyword = datasetArray[i].search;
        setHeader(datasetArray[i].header);
        console.log("keyword", keyword);
      }
    }
    fetch(
      `https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset
      }/search?keyword=${keyword}&language=en&apikey=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data?.data);
        console.log(data);
      });
  }, [dataset]);

  return (
    <>
      <Navbar />
      <br />
      <div style={{ paddingLeft: 20 }}>
        <Button variant="outlined" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </div>
      <h1 className="header">{header}</h1>
      <div className="card-list">
        {data?.map((item, index) => (
          <BasicCard
            removeFavs={removeFavs}
            handleFavs={handleFavs}
            key={index}
            item={item}
            favs={favs}
          />
        ))}
      </div>
    </>
  );
};
export default Main;

// console.log(`https://tih-api.stb.gov.sg/content/v1/${dataset.includes("_") ? dataset.replace("_", "-") : dataset}/search/keyword=${keyword}&language=en&apikey=${API_KEY}`)
// const handleClick = (event) => {
//     // console.log(event.target.id)
//     setLike(!like)
//     // handleFavs(item.dataset, item.uuid)
//     console.log(like)
// }

// }
// getKeyword()
         // dataset={dataset}
            // check={check}
            // setCheck={setCheck}
            // id={item.uuid}

            // import dataArray from "../data";
// import DrinksCard from "../unused/DrinksCard";

  // const [ like, setLike ] = useState(true)
  // const [check, setCheck] = useState(null)
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

function App() {
  const [favs, setFavs] = useState([])
  const handleFavs = (dataset, id) => {
    setFavs([...favs, {
      dataset: dataset,
      id: id,
    }])
    console.log("testing")
    console.log(favs)
  }

  const removeFavs = (num) => {
    setFavs(favs.filter((item, index) => item.id !== num))
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home handleFavs={handleFavs} removeFavs={removeFavs} favs={favs} />} />
          <Route path="/:dataset" element={<Main handleFavs={handleFavs} favs={favs} removeFavs={removeFavs} />} />
          <Route path="/:dataset/:id" element={<Detail />} />
          <Route path="/favourites" element={<Favourites removeFavs={removeFavs} favs={favs} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

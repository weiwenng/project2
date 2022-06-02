import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import MainEvents from "./pages/MainEvents";
import Drinks from "./pages/Drinks";
import Favourites from "./pages/Favourites";
import Detail from "./pages/Detail";
import Main from "./pages/Main";
// import EventDetail from "./unused/EventDetail";
// import FilterTag from "./pages/FilterTag";
// import ToDo from "./pages/ToDo";
// import DrinksDetail from "./unused/DrinksDetail";


function App() {
  // const [count, setCount] = useState(0);
  // const [data, setData] = useState(null)
  // save the ID in state
  const [favs, setFavs] = useState([])
  const handleFavs = (dataset,id) => {
    setFavs([...favs, {
      dataset: dataset,
      id: id
    }])
    console.log("test")
    console.log(favs)
  }
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:dataset" element={<Main handleFavs={handleFavs} favs={favs} />} />
          <Route path="/:dataset/:id" element={<Detail />} />
          <Route path="/favourites" element={<Favourites favs={favs}/>} />
          {/* <Route path="/things" element={<ToDo />} /> */}
          {/* <Route path="/event" element={<MainEvents handleFavs={handleFavs}/>} /> */}
          {/* <Route path="/events/:id" element={<EventDetail />} /> */}
          {/* <Route path="/bars_clubs" element={<Drinks handleFavs={handleFavs}/>}/> */}
          {/* <Route path="/nightlife/:id" element={<DrinksDetail/>} /> */}
          {/* </Route> */}
          {/* <Route path="/filter/:tag" element={<FilterTag />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// < div className = "App" >
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/events" element={<MainEvents />} />
//       <Route path="/events/:item" element={<EventDetail />} />
//       <Route path="/filter/:tag" element={<FilterTag />} />
//     </Routes>
//   </BrowserRouter>
//   </div >

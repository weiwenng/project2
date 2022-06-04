import { TextField, Autocomplete, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import BasicCard from "./BasicCard";


const Search = ({ favs, handleFavs, removeFavs }) => {
    // should be an array of strings 
    const [test, setTest] = useState(null)
    const [value, setValue] = useState()
    const [valueCat, setValueCat] = useState()
    const [types, setTypes] = useState()
    const [search, setSearch] = useState()
    const API_KEY = import.meta.env.VITE_API_KEY;
    useEffect(() => {
        fetch(`https://tih-api.stb.gov.sg/content/v1/datasets?apikey=${API_KEY}`)
            .then((response) => response.json())
            .then((data) => {
                setTest(data?.data)
                // console.log(value)
                return (value &&
                    fetch(`https://tih-api.stb.gov.sg/content/v1/${value.includes("_") ? value.replace("_", "-") : value}/types?language=en&apikey=${API_KEY}`)
                        .then((response) => response.json())
                        .then((data) => {
                            setTypes(data?.data)
                            console.log(types)
                        }
                        )
                )

            })

    }, [value])

    return (
        <>
            <Stack sx={{  margin: "auto" }}>
                <br/>
                <Autocomplete
                    disablePortal
                    id="categories"
                    options={test}
                    sx={{ width: 300, margin: "auto" }}
                    value={value}
                    onChange={(event, newValue) => { setValue(newValue) }}
                    getOptionLabel={(option) => option}
                    renderInput={(params) => <TextField value={test} {...params} label="Categories" />}
                // onChange={(e) => setValue(e.target.value)}
                />

                {/* <h1>{value}</h1> */}
                {value && (
                    <>
                        {/* <h1>Testing</h1>
                <h1>{value}</h1> */}
                        <br />
                        <Autocomplete
                    
                            disablePortal
                            id="types"
                            options={types}
                            value={valueCat}
                            sx={{ width: 300, margin: "auto" }}
                            onChange={(event, newValue) => { setValueCat(newValue) }}
                            renderInput={(params) => <TextField value={types} {...params} label="Types" />}

                        />
                        <Button onClick={() => {
                            fetch(`https://tih-api.stb.gov.sg/content/v1/${value.includes("_") ? value.replace("_", "-") : value}/search?keyword=${types}&language=en&apikey=GnloiEy5Obcp0Z0dDikvxUf6krTNEQtF`)
                                .then((response) => response.json())
                                .then((data) => {
                                    setSearch(data?.data)
                                    console.log(data)
                                })
                            // console.log(types)
                            // setValue(value)
                        }}>Search</Button>

                        {search && (
                        <div className="search-list">
                        {search?.map((item, index) => <BasicCard className="search" key={index} item={item} favs={favs} handleFavs={handleFavs} removeFavs={removeFavs} />)}
                        </div>)
                            // <SearchResults search={search} favs={favs} handleFavs={handleFavs} removeFavs={removeFavs}/>
                        }
                    </>
                )}

                {/* <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Categories" />}
            /> */}
            </Stack>
        </>
    )
};

export default Search;



// const array = (datasetArray.map((option) => (option["selection"])))
// const options = [].concat(array.forEach((arr) => arr))// const options = dataSearch.map((option) => option.type)
// console.log("options", options);

// return (
//     <>
//         <Autocomplete
//             disablePortal
//             id="combo-box-demo"
//             options={options}
//             // groupBy={(option) => option.dataset}
//             // getOptionLabel={(option) => option.map((item) => item)}
//             getOptionLabel={(option) => option}
//             sx={{ width: 300 }}
//             renderInput={(option) => <TextField {...option} label="search details" />}
//         />
//     </>
// );
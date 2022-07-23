import { TextField, Autocomplete, Stack, Button } from "@mui/material";
import { useEffect, useState } from "react";
import BasicCard from "./BasicCard";
import { makeStyles } from "@mui/styles"

// const useStyles = makeStyles({
//   root: {
//     // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     background: 'white',
//     border: 0,
//     borderRadius: 3,
//     color: 'white',
//     width: 0,
//     height: 55,
//     // padding: '0 0px',
//   }
//     }
// )

const Search = ({ favs, handleFavs, removeFavs }) => {
  // should be an array of strings
  const [test, setTest] = useState(null);
  const [value, setValue] = useState();
  const [valueCat, setValueCat] = useState();
  const [types, setTypes] = useState();
  const [search, setSearch] = useState();
  const API_KEY = import.meta.env.VITE_API_KEY;
  // const styleClass = useStyles();
  useEffect(() => {
    fetch(`https://tih-api.stb.gov.sg/content/v1/datasets?apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setTest(data?.data);
        // console.log(value)
        return (
          value &&
          fetch(
            `https://tih-api.stb.gov.sg/content/v1/${value.includes("_") ? value.replace("_", "-") : value
            }/types?language=en&apikey=${API_KEY}`
          )
            .then((response) => response.json())
            .then((data) => {
              setTypes(data?.data);
              console.log(types);
            })
        );
      });
  }, [value]);

  return (
    <>
      <Stack sx={{ margin: "auto" }}>
        <br />
        <Autocomplete
          disablePortal
          id="categories"
          // className={styleClass.root}
          variant="filled"
          options={test}
          sx={{ width: 300, margin: "auto" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          getOptionLabel={(option) => option}
          renderInput={(params) => (
            <TextField value={test} {...params} label="Categories" />
          )}
        />

        {value && (
          <>
            <br />
            <Autocomplete
              disablePortal
              id="types"
              options={types}
              value={valueCat}
              sx={{ width: 300, margin: "auto" }}
              onChange={(event, newValue) => {
                setValueCat(newValue);
              }}
              renderInput={(params) => (
                <TextField value={types} {...params}
                  //  className={styleClass.root} 
                  label="Types" />
              )}
            />
            <Button
              onClick={() => {
                fetch(
                  `https://tih-api.stb.gov.sg/content/v1/${value.includes("_") ? value.replace("_", "-") : value
                  }/search?keyword=${types}&language=en&apikey=GnloiEy5Obcp0Z0dDikvxUf6krTNEQtF`
                )
                  .then((response) => response.json())
                  .then((data) => {
                    setSearch(data?.data);
                    console.log(data);
                  });
                // console.log(types)
                // setValue(value)
              }}
            >
              Search
            </Button>

            {search && (
              <div className="search-list">
                {search?.map((item, index) => (
                  <BasicCard
                    className="search"
                    key={index}
                    item={item}
                    favs={favs}
                    handleFavs={handleFavs}
                    removeFavs={removeFavs}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </Stack>
    </>
  );
};

export default Search;

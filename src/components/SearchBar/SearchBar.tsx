import style from "./SearchBar.module.css";
import axios from "axios";
import { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import React from "react";

const SearchBar = () => {

  const [value, setValue] = useState("");
  const [serverRes, setServerRes] = useState([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let userInput: string = event.target.value;
    let specCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/gi;
    let specialCharSearch: any = userInput.replace(specCharRegex, " ");
    let removeSpac = specialCharSearch.trim();
    setValue(specialCharSearch);
    // console.log(value);
  };

  const handleSubmit = () => {
    console.log(value);
    axios
      .post("http://localhost:3001/car-insurance", {"data": `${value}`})
      .then((res) => setServerRes(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={style.searchBarWrapper}>
      <div className={style.searchBarContainer}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "45ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-multiline-flexible"
            label="Ask me anything about breakdown insurance..."
            multiline
            maxRows={4}
            type="text"
            value={value}
            onInput={handleChange}
            className={style.userInput}
          />
          <LoadingButton
            loading={false}
            loadingIndicator="Loading…"
            variant="outlined"
            className={style.search}
            loadingPosition="center"
            onClick={handleSubmit}
          >
            Search
          </LoadingButton>
        </Box>
      </div>
      <div className={style.resultWrapper}>
        <div className={style.resultContainer}>
          <h4>Answer to your question: {value}</h4>
          <div className={style.content}>
            {
              serverRes.map((data: any, index: any) => 
                <ul>
                  <li>{data.text}</li>
                </ul>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;

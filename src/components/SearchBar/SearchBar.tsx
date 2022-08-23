import style from "./SearchBar.module.css";
import { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";

import React from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let userInput: string = event.target.value;
    let specialCharSearch = userInput.replace(
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/gi,
      " "
    );
    let removeSpac = specialCharSearch.trim();
    setValue(removeSpac);
    console.log(value);
  };

  return (
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
          onChange={handleChange}
          className={style.userInput}
        />
        <LoadingButton
          loading={false}
          loadingIndicator="Loading…"
          variant="outlined"
          className={style.search}
          loadingPosition="center"
        >
          Search
        </LoadingButton>
      </Box>
      <div className={style.response}></div>
    </div>
  );
};

export default SearchBar;

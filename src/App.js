import React, { useState, useEffect } from "react";
import "./App.css";
import Heading from "./Component/heading";
import Title from "./Component/Title";
import Photo from "./Component/Photo";
import Description from "./Component/Description";
import { API_KEY, BASE_URL } from "./Constants/Constants.js";
import axios from "axios";
import styled, { keyframes } from "styled-components";

const initialData = {
  date: "",
  title: "",
  url: "",
  explanation: "",
};

const StyledApp = styled.div`
  background-color: ${(pr) => pr.theme.backgroundBlack};
`;

function App() {
  const [data, setData] = useState(initialData);
  console.log(data.explanation);
  useEffect(() => {
    axios
      .get(`${BASE_URL}planetary/apod?api_key=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        return console.log("error", err);
      });
  }, []);
  return (
    <StyledApp className="App">
      <Heading date={data.date} />
      <Title title={data.title} />
      <Photo photo={data.url} />
      <Description description={data.explanation} date={data.date} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </StyledApp>
  );
}

export default App;

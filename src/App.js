import React, { useState, useEffect} from "react";
import "./App.css";
import Heading from "./Component/heading"
import Title from "./Component/Title"
import Photo from "./Component/Photo"
// import Constants
import axios from "axios";


function App() {
  const [data, setData ] = useState ([]);

  useEffect(() =>{ 
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
        setData(res.data)
    })
    .catch(err =>{
      return console.log('error', err)
    })
  }, [] ) 
  return (
    <div className="App">
      <Heading />
      <Title title ={data.title}/>
      <Photo photo ={data.url}/>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
    

  )}

export default App;

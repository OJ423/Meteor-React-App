import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import Table from "./Table";

export default function ListManager() {
  const [searchYear, setSearchYear] = useState("1977");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const fetchMetoerites = () => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?year=${searchYear}-01-01T00:00:00.000`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
       setData(responseData)
       setIsLoading(false)
      });
  };

  useEffect(()=>{
    fetchMetoerites()
  },[searchYear])
  
  
  return (
    
      isLoading ? <p>Data is loading</p> : (
        <>
        <SearchForm setSearchYear={setSearchYear}/> 
        <Table data={data} />
        </>)
  )

}

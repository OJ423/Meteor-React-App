import { useState, useEffect } from "react";

import SearchForm from "./SearchForm";
import Table from "./Table";
import YearDisplay from "./YearDisplay";

export default function ListManager() {
  const [searchYear, setSearchYear] = useState("1977");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toggleTableView, setToggleTableView] = useState(false);
  const [detailsScreen, setDetailsScreen] = useState(false);
  const fetchMetoerites = () => {
    fetch(
      `https://data.nasa.gov/resource/gh4g-9sfh.json?year=${searchYear}-01-01T00:00:00.000`
    )
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        const cleanedData = responseData.map((meteorite) => {
          meteorite.mass = +meteorite.mass
          meteorite.year = meteorite.year.slice(0,4)
          return meteorite
        })
        setData(cleanedData);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchMetoerites();
  }, [searchYear]);

  return isLoading ? (
    <p>Data is loading</p>
  ) : (
    <>
      <SearchForm setSearchYear={setSearchYear} detailsScreen={detailsScreen} />
      {toggleTableView ? 
      <Table
        data={data}
        detailsScreen={detailsScreen}
        setDetailsScreen={setDetailsScreen}
        setToggleTableView={setToggleTableView}
      />
      : <YearDisplay setToggleTableView={setToggleTableView} searchYear={searchYear} data={data}/> 

    }
    </>
  );
}

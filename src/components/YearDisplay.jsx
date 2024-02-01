import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import Charts from "./Charts";

export default function YearDisplay({ data, setToggleTableView, searchYear }) {
  const [summaryMeteorite, setSummaryMeteorite] = useState([]);

  // const yearSummary = () => {
  function meteoriteCalc() {
    let massSize = 0;
    let biggest = {};
    let avgSize = 0;
    let average = "";
    data.map((meteorite) => {
      if (+meteorite.mass !== undefined && +meteorite.mass > massSize) {
        massSize = +meteorite.mass;
        biggest = { name: meteorite.name, mass: +meteorite.mass };
      }
      if (+meteorite.mass !== undefined && +meteorite.mass > avgSize) {
        avgSize = +meteorite.mass;
        average = meteorite.name;
      }
    });
    return {
      biggest: { name: biggest.name, mass: +biggest.mass },
      average: +(avgSize / data.length),
      avgName: average,
      numMeteorites: data.length
    };
  }
  const meteoriteStats = meteoriteCalc()
  useEffect(() => {
    setSummaryMeteorite(meteoriteStats);
  }, [data]);

  function MutlipleMarkers() {
    const marker = data.map((meteorite) => {
      if (meteorite.reclat !== undefined) {
        return <Marker key={meteorite.id+searchYear}
          position={[meteorite.reclat, meteorite.reclong]}
          ><Popup><p>{meteorite.name} - Mass: {meteorite.mass}</p></Popup></Marker>
        ;
      }
    });
    return marker
  }
  const switchToTableView = () => {
    setToggleTableView(true);
  };

  return (
    <>
      <section className="summary-display">
      <h2>{searchYear} Quick Stats</h2>
        <div id="number-of-meteorites">
          <h3>{meteoriteStats.numMeteorites} meteorites recorded</h3>
        </div>
        <div id="biggest-meteorite">
          <h3>The biggest meteorite recorded was {meteoriteStats.biggest.name}, at {meteoriteStats.biggest.mass} grams</h3>
        </div>
        <div id="average-meteorite">
          <h3>The average meteorite was {meteoriteStats.average.toFixed(2)} grams</h3>
        </div>
        </section>
        <section className="summary-map-container">
          <h2>See Where Meteorites Fell in {searchYear}</h2>
        <MapContainer
          id="summary-map"
          center={[39.04, -34.00]}
          zoom={2}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MutlipleMarkers />
        </MapContainer>
        <Charts data={data} searchYear={searchYear}/>
        </section>
      <div className="switch-to-table-view">
        <p>
          Switch to table view to see all meteorites and drill down to
          individuals ones.
        </p>
        <button onClick={switchToTableView}>Switch to Table View</button>
      </div>
    </>
  );
}

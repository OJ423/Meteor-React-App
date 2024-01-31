import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";

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
    };
  }

  useEffect(() => {
    setSummaryMeteorite(meteoriteCalc());
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
      {/* <section className="summary-display">
        <h2>{searchYear}</h2>
        <div id="biggest-meteorite">
          <h3>Biggest in {searchYear}: {summaryMeteorite.biggest.mass} grams</h3>
          <p>{summaryMeteorite.biggest.name}</p>  
        </div>
        <div id="averge-meteorite">
          <h3>Average Meteorite Size</h3>
          <p>{summaryMeteorite.average.toFixed(2)}</p>  
        </div>
        </section> */}
        <MapContainer
          id="summary-map"
          center={[22.492257, -34.127775]}
          zoom={1}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MutlipleMarkers />
        </MapContainer>
      <div className="switch-to-table-view">
        <p>
          Switch to tableview to see all meteorites and drill down to
          individuals ones.
        </p>
        <button onClick={switchToTableView}>Switch to Table View</button>
      </div>
    </>
  );
}

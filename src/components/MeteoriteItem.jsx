import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function({meteorite}) {
  const position = [meteorite.reclat, meteorite.reclong]
  return (
    <section className="meteorite-details">
      <h2>{meteorite.id} {meteorite.name}</h2>
      {meteorite.reclat === undefined ? <p>No geo-data to display map</p> : 
      <MapContainer id="map" center={position} zoom={3} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
      <Popup>
        <h3>{meteorite.name}</h3>
        <ul>
          <li>Mass:{meteorite.mass}</li>
          <li>Class:{meteorite.recclass}</li>
          <li>ID:{meteorite.id}</li>
        </ul>
      </Popup>
    </Marker>
      </MapContainer>
      }
    </section>
  )
}
import icon from "../assets/meteor-shower.png"

export default function Header() {
  return (
      <section className="header">
        <img src={icon} alt="Meteor cartoon icon" />
        <div>
          <h1>Nasa Meteorite Data App</h1>
          <p>Find out about meteorites that have smashed into the Earth</p>
        </div>
      </section>
  );
}

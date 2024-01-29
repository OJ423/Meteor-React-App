export default function ListItem(props) {
  const { dataItem } = props;
  const justTheYear = dataItem.year.slice(0, 4);
  return (
    <>
      <li>
        <h3>name: {dataItem.name}</h3>
        <p>id: {dataItem.id}</p>
        <p>year: {justTheYear}</p>
        <p>geoLoction: latitude: {dataItem.reclat}, longitude: {dataItem.reclong}</p>
        <p>fall: {dataItem.fall}</p>
        <p>recclass: {dataItem.recclass}</p>
        <p>mass: {dataItem.mass}</p>
      </li>
    </>
  );
}

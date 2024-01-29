import ListItem from "./ListItem"

export default function List(props) {
    const {data} = props
    return (
        <>
        <ul>
            {data.map(dataItem =>(
            <ListItem key={dataItem.id} dataItem={dataItem}/>
            ))}     
        </ul>
        </>
    )
}
import MeteoriteItem from './MeteoriteItem'

export function MeteoriteDetails({selectedRows, setDetailsScreen, setSelectedRows}) {
  
  function handleClick() {
    setDetailsScreen(false)
    setSelectedRows([])
  }

  return(<>
      {selectedRows.map((meteorite) => (
        <MeteoriteItem key={meteorite.id} meteorite={meteorite}/>
      ))}

      <button onClick={handleClick}>Back to list</button>
      </>
    // 
  )
}
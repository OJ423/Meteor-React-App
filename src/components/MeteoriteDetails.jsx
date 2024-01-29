export function MeteoriteDetails({selectedRows, setDetailsScreen}) {
  const visualiseData = selectedRows
  
  function handleClick() {
    setDetailsScreen(false)
  }

  return(<>
      {visualiseData.map((row) => (
        <section key={row.id+row.name}>
          <h3>{row.name} {row.year.slice(0,4)}</h3>
          <p>{row.mass}</p>
        </section>
      ))}
      <button onClick={handleClick}>Back to list</button>
      </>
    // 
  )
}
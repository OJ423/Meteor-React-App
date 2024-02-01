import {useState} from "react"

export default function SearchForm(props) {
    const {setSearchYear, detailsScreen} = props;
    const [newYear, setNewYear] = useState();

    function handleYearChange(event) {
        setNewYear(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSearchYear(newYear);
        setNewYear("")
    }

    return (
        <>
        {detailsScreen ? null : 
        <section id="form">
            <p className="form-intro">Enter a search year to discover Nasa's meteorite data for that year.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="yearSearch">Select year: </label>
                <input type="Number" id="yearSearch" value={newYear} onChange={handleYearChange}/>
                <button>Search</button>
            </form>
        </section>
        }
        </>
    )
}
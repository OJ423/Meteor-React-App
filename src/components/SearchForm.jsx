import {useState} from "react"

export default function SearchForm(props) {
    const {setSearchYear} = props;
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
        <section id="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="yearSearch">Select year: </label>
                <input type="Number" id="yearSearch" value={newYear} onChange={handleYearChange}/>
                <button>Search</button>
            </form>
        </section>
        </>
    )
}
import React from "react";
import userInput from "../hooks/userInput";

function SearchBar(props) {
    const [value, handleChange] = userInput('')

    function search(e) {
        e.preventDefault()
        props.onSearch(value)
    }

    return (
        <div>
            <form onSubmit={search}>
                <input type={"text"} onChange={handleChange} value={value}/>
                <button type="submit">🔍</button>
            </form>
        </div>
    )
}

export default SearchBar;
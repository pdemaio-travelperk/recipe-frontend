import React from "react";
import userInput from "../hooks/userInput";

function SearchBar(props) {
    const [value, handleChange] = userInput('')

    function search() {
        props.onSearch(value)
    }

    return (
        <div>
            <input type={"text"} onChange={handleChange} value={value}/>
            <button onClick={search}>🔍</button>
        </div>
    )
}

export default SearchBar;
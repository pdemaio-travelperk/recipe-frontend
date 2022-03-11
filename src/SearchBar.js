import React, {useState} from "react";

function SearchBar() {
    const[term, setTerm] = useState('')

    function search() {
        alert("searching")
    }

    return (
        <div>
            <input type={"text"}>{term}</input>
            <button onClick={search}></button>
        </div>
    )
}

export default SearchBar;
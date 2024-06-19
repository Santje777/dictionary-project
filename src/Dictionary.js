import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState(null);
    const [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
        setResults(response.data);
    }
    
    function search(event) {
        event.preventDefault();

        let apiKey="3734of2cfc5035aca32f96t5a9b478fb";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    
    return(
        <div className="Dictionary">
            <h2>Search for a word:💦</h2>
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} />
        </form>
        <Results results={results} />
        </div>
    )
}
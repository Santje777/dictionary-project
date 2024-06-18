import { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary () {
    const [keyword, setKeyword] = useState(null);

    function handleResponse(response) {
        console.log(response.data);
    }
    
    function search(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        let apiKey="3734of2cfc5035aca32f96t5a9b478fb";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    
    return(
        <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} />

        </form>
        </div>
    )
}
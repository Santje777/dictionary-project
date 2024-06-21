import { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary (props) {
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] =useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data);
    }

    function handleImageResponse(response) {
        setPhotos(response.data.photos);
    }
    
    function search() {
        let apiKey="3734of2cfc5035aca32f96t5a9b478fb";
        let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let imageApiKey="3734of2cfc5035aca32f96t5a9b478fb"
        let imageApiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`
        axios.get(imageApiUrl).then(handleImageResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }
    
    function load() {
        setLoaded(true);
        search()
    }

    if (loaded) {
        return(
        <div className="Dictionary">
            <h2>Search for a word:💦</h2>
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword} />
        </form>
        <div className="for-example">
        <b>For example: drop, light, flower, communication</b>
        <br />
        <i>(NB: this app only shows your word if the app knows the word, otherwise refresh the page. 🔄 At default this site shows the word "rain".)</i>
        </div>
        <Photos photos={photos} />
        <Results results={results} />
        </div>)} else { 
            load(); 
            return("Loading")}
}
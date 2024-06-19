import Phonetic from "./Phonetic";
import Meanings from "./Meanings";

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Results">
            
<h2>{props.results.word}</h2>
<Phonetic phonetic={props.results.phonetic} word={props.results.word}/>
    {props.results.meanings.map(function (meanings, index) {
        return (
            <div key={index}>
                <Meanings meanings={meanings} />
            </div>
        );
    })}
        </div>
    );
} else {
    return null;
} }
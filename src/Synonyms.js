export default function Synonyms(props){
    if (props.synonyms) {

    return(
        <div className="Synonyms">
            <strong>Syonym(s):</strong>
        <ul>
            {props.synonyms.map(function (synonym, index) {
                return(
                    <li key={index}>{synonym}</li>);}
                )}
        </ul>
        </div>
    )} else { return null;}
}
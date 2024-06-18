export default function Meanings(props) {
    return (
        <div className="Meanings">
        <h3>{props.meanings.partOfSpeech}</h3>
        <p>{props.meanings.definition}</p>
        <em>{props.meanings.example}</em>
        <br/>
        <br/>
        <br/>
        </div>)
}
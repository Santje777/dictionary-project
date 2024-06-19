import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
    return (
        <div className="Meanings">
            <section>
        <h3>{props.meanings.partOfSpeech}</h3>
       <p> <strong>Definition:</strong> {props.meanings.definition}
       < br />
       <Example example={props.meanings.example} />
        <Synonyms synonyms={props.meanings.synonyms} />
        </p> 
        </section>
        </div>)
}
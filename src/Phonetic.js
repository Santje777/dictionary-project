import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic(props) {
    let url=`https://ssl.gstatic.com/dictionary/static/sounds/20200429/${props.word}--_gb_1.mp3`
    return(
        <div className="Phonetic">
           <b><em>Pronunciation:</em></b> {props.phonetic} {" "}
           <ReactAudioPlayer
  src= {url}
  autoPlay
  controls
/>
        </div>
    )
}
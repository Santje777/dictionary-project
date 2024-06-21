export default function Photos(props) {
    if(props.photos){
    return( 
    <div className="Photos">
        <div className="row">
       {props.photos.map(function(photo, index){
        return (
        <div classname="col-3"key={index}>
        <img src={photo.src.landscape} className="img-fluid" />
        </div>)
       })} 
       </div>
       </div>
     )} else {
            return(null);
        }}
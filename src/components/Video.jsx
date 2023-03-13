
function Video(props) {
    return (
      <div class = 'card video-info'>
       <h3>{props.title}</h3>  
       <span>{props.channel}</span><br/>
       <label>{props.dateAdded}</label>
       <img src = {props.thumbnail}/>
       <p>{props.description}</p>
      </div>
        );
    }

export default Video;
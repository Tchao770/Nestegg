function PhotoHeading(props){
    return (
        <img src={props.src} alt={props.name} style={{width: "100vw"}}/>
    );
}

export default PhotoHeading
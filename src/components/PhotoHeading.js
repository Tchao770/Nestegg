const photoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
}


const overFlowStyle = {
    display: "inline-block",
    overflow: "hidden",
    height: "500px"
}
function PhotoHeading(props) {
    return (
        <div style={overFlowStyle}>
            <img src={props.src} alt={props.name} style={photoStyle} />
        </div>
    );
}

export default PhotoHeading
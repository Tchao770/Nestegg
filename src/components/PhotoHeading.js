const photoStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    MozUserSelect: "none",
    WebkitUserSelect: "none",
    msUserSelect: "none",
}

const overFlowStyle = {
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

export default PhotoHeading;
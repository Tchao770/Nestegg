function PhotoHeading(props) {
    return (
        <div className="OverFlowHandler">
            <img src={props.src} className="PageImg" alt={props.name} />
        </div>
    );
}

export default PhotoHeading;
function ArticleDiv(props) {
    return (
        <article className={`ArticleDiv`} style={props.customStyle}>
            <h2 className="Heading">{props.title}</h2>
            <p>{props.paragraph}</p>
        </article >
    );
}

export default ArticleDiv;
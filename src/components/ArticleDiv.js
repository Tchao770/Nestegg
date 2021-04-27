function ArticleDiv(props) {
    return (
        <article className={`ArticleDiv`} style={props.customStyle}>
            <p>{props.paragraph}</p>
        </article >
    );
}

export default ArticleDiv;
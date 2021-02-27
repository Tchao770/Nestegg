function ArticleDiv(props) {
    return (
        <article className={`ArticleDiv ${props.customclassName}`}>
            <h2 className="Heading">{props.title}</h2>
            <p>{props.paragraph}</p>
        </article>
    );
}

export default ArticleDiv;
function ArticleDiv (props) {
    return (
        <article className={`articleDiv ${props.customclassName}`}>
            <h1 className="pHeading">{props.title}</h1>
            <p>{props.paragraph}</p>
        </article>
    );
}

export default ArticleDiv;
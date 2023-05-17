import React from "react";

function Article(prop) {
    return(
        <article>
            <h3>{prop.title}</h3>
            <small>{prop.date}</small>
            <p>{prop.preview}</p>
        </article>
    );
}

Article.defaultProps = {
    date: "January 1, 1970"
  }

export default Article;
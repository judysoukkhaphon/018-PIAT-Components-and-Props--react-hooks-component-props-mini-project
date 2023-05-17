import React from "react";
import Article from "./Article";

function ArticleList (props) {
    // keep in mind that "props" is receiving a dictionary object which contains an array of dicionary objects
    // so you have to make sure to reference the dictionary, "post", that "props" contains.
    // then from adding on to that reference you can then reference the objects inside the array.
    const posts = props.post;
    let articleArray =[];
    posts.map((prop) => {
        const art = <Article 
        key={prop.id} 
        title={prop.title} 
        date={prop.date} 
        preview={prop.preview}/>;

        articleArray.push(art);

    });

    console.log(articleArray);

    return (
        <main>
            {articleArray}
        </main>
    )
}



export default ArticleList;
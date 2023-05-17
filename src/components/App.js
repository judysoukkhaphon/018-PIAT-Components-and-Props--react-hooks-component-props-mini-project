import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from "./About";


console.log(blogData.posts); // prints an array

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image}/>
      <ArticleList post={blogData.posts}/> {/* <-- if you print 'post' in ArticleList, it prints a dictionary object of arrays*/}

    </div>
  );
}




export default App;

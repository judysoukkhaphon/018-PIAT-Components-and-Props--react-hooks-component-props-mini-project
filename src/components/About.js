import React from "react";

function About (prop) {
    return(
        <aside>
            <img src={prop.image} alt="blog logo"></img>
            <p>{prop.about}</p>
        </aside>
    )
}

About.defaultProps = {
    image:"https://via.placeholder.com/215"
  }
  

export default About;
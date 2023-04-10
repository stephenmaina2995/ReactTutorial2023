import React from "react";
import ReactDOM from "react-dom";

function BookLibrary() {
  return <section>
   <Book/>

  </section>
}
//This is the first tutorial
const Book=()=>{
  return (
  <article>
    
    <Image />
    <Author/>
    </article>
    );
};
const Image=()=><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tpCF5wVNYHw_PW2F1gJm83cj0oZoyk6Dtw&usqp=CAU" alt=""/>
const Author=()=>{
  return <h1>Jefferson Cowie</h1>
}
ReactDOM.render(<BookLibrary />, document.getElementById("root"));

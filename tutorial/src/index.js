import React from "react";
import ReactDom from "react-dom";

// CSS, justgrb all
import "./index.css";
// no need extension because this is a js file
import { books } from "./books";
// default export, rename Book to Bok
import Bok from "./Book";

import { greeting } from "./testing/testing";

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

function BookList() {
  // capitalize first letter, so react knows this is component
  // stateless functional component
  // always return JSX
  console.log(greeting);
  return (
    <section className="booklist">
      {books.map((book) => {
        // const { img, title, author } = book;
        // return <Book key={book.id} book={book}></Book>;
        // use a spread operator
        // children are between the ><
        return <Bok key={book.id} {...book}></Bok>;
      })}
    </section>
  );
}

// book is a function!
// object destructuring
// children has to be named children, its in the prop

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is a msg</p>;
// };
// const Greeting = () => {
//   return React.createElement("h1", {}, "hello world");
// };
// not going to work if the return stuff is complex

ReactDom.render(
  <BookList />, // need to close it
  document.getElementById("root")
);

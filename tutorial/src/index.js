import React from "react";
import ReactDom from "react-dom";

// CSS, justgrb all
import "./index.css";

// setup vars
const book1 = {
  img: "https://i.pinimg.com/474x/69/77/b7/6977b70a129ec184527433bbdf9fe457.jpg",
  title: "cat book 1",
  author: "author 1",
};
const book2 = {
  img: "https://news.artnet.com/app/news-upload/2019/01/Cat-Photog-Feat-256x256.jpg",
  title: "cat book 2",
  author: "author 2",
};

// JSX Rules
// return single element
// div / section / article or Fragment
// use camelCase for html attribute
// className instead of class
// close every element
// formatting

// Nested components, react tools

function BookList() {
  // capitalize first letter, so react knows this is component
  // stateless functional component
  // always return JSX
  return (
    <section className="booklist">
      <Book img={book1.img} title={book1.title} author={book1.author}>
        <p>
          Children prop: Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo repellendus temporibus fuga dolorum quam omnis, tempore
          quibusdam perspiciatis sint harum!
        </p>
      </Book>
      <Book img={book2.img} title={book2.title} author={book2.author} />
    </section>
  );
}

// book is a function!
// object destructuring
// children has to be named children, its in the prop
const Book = (props) => {
  const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

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

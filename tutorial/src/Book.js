import React from "react";

const Book = (props) => {
  // no need .book if using ...book above
  // attribute, evenHandler here
  // onClick, onMonseOver (synthetic event)
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("yoyoyo");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  const { img, title, author } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
      {/* {props.children} */}
    </article>
  );
};

// you can have only one DEFAULT export
export default Book;

import React from "react";
import Quote from "./Quote";
import Author from "./Author";
import Buttons from "./Buttons";

const QuoteBox = ({ quote, author, fetchRandomQuote, textColor, buttonColor }) => {
  return (
    <div id="quote-box" className="quote-box" >
      <div className="quote-text" style={{color:textColor}} >
        <i className="fa-solid fa-quote-left"></i>
        <span id="text">
          <Quote text={quote} />
        </span>
      </div>
      <div className="quote-author" style={{color:textColor}} >
        {"- "}
        <span id="author">
          {" "}
          <Author author={author} />
        </span>
      </div>

      <Buttons quote={quote} fetchRandomQuote={fetchRandomQuote} buttonColor={buttonColor}/>
    </div>
  );
};

export default QuoteBox;

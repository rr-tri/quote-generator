import React from "react";

const Buttons = ({ fetchRandomQuote,buttonColor }) => {
  return (
    <div className="button-container">
      
        <a
          id="tweet-quote"
          className="button"
          target="_blank"
          href={`twitter.com/intent/tweet`}
          rel="noreferrer"
          style={{backgroundColor:buttonColor}}
        >
          <i className="fab fa-twitter"></i> {/* Twitter icon */}
        </a>

        <a
          id="tumblr-quote"
          className="button"
          target="_blank"
          href={`https://twitter.com/`}
          rel="noreferrer"
          style={{backgroundColor:buttonColor}}
        >
          <i className="fab fa-tumblr"></i> {/* Twitter icon */}
        </a>
      

      <button id="new-quote" className="button" onClick={fetchRandomQuote} style={{backgroundColor:buttonColor}}>
        New Quote
      </button>
    </div>
  );
};

export default Buttons;

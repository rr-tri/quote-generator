import React from "react";

const Buttons = ({ quote, fetchRandomQuote,buttonColor }) => {
  return (
    <div className="button-container">
      
        <a
          id="tweet-quote"
          className="button"
          target="_blank"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
          )}&text=${encodeURIComponent(
            quote
          )}`}
          rel="noreferrer"
          style={{backgroundColor:buttonColor}}
        >
          <i className="fab fa-twitter"></i> {/* Twitter icon */}
        </a>

        <a
          id="tumblr-quote"
          className="button"
          target="_blank"
          href={`https://www.tumblr.com/share/link?url=${encodeURIComponent(window.location.href)}&name=${encodeURIComponent(quote)}&description="Check out this amazing blog post I found!"`}
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

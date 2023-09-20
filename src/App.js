import React, { Component } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import axios from "axios";
import quotesvg from "./quote.svg";
const colors = [
  "#007bff",
  "#28a745",
  "#ffc107",
  "#dc3545",
  "#6f42c1",
  "#676324",
  "#364567",
  "#357913",
  "#579258",
  "#693715",
];
class App extends Component {
  constructor(props) {
    super(props);
    let current_color = getRandomColor(colors);
    this.state = {
      quote: null,
      author: null,
      backgroundColor: current_color,
      textColor: current_color,
      buttonColor: current_color,
    };
  }

  componentDidMount() {
    this.fetchRandomQuote();
  }

  async fetchRandomQuote() {
    try {
      const newThemeColor = getRandomColor(colors);
      const response = await axios.get("https://api.quotable.io/random");
      // console.log("response", response);
      const { content, author } = response.data;
      this.setState({
        quote: content,
        author,
        backgroundColor: newThemeColor,
        textColor: newThemeColor,
        buttonColor: newThemeColor,
      });
      console.log("state", this.state);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  render() {
    if (this.state.quote === null) {
      return (
        <div className="App">
          <img
            style={{ height: "60vh", width: "69vw" }}
            src={quotesvg}
            alt="Logo"
          />
        </div>
      );
    }
    return (
      <div
        className="App"
        style={{ backgroundColor: this.state.backgroundColor }}
      >
        <h1>Quote Generator</h1>
        {this.state.quote && (
          <QuoteBox
            quote={this.state.quote}
            author={this.state.author}
            fetchRandomQuote={() => this.fetchRandomQuote()}
            textColor={this.state.textColor}
            buttonColor={this.state.buttonColor}
          />
        )}
        <div style={{ margin: "20px" }}>
          BY{" "}
          <a
            style={{ color: "black", fontWeight: 600 }}
            href="https://www.github.com/rr-tri"
          >
            <span>RR-TRI</span>
          </a>
        </div>
      </div>
    );
  }
}
function getRandomColor(colorArray) {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
}
export default App;

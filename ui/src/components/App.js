import React from "react";
import presentationGenerator from "../services/presentationGenerator";

class App extends React.Component {
  state = {
    filename: "",
    content: "",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    presentationGenerator(
      this.state.filename,
      this.state.content,
      this.state.backgroundColor,
      this.state.textColor
    );

    this.setState({
      content: "",
      filename: "",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    });
  };

  render() {
    return (
      <div className="app">
        <label>Enter content: </label>
        <input
          type="text"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <br />
        <label>Enter file name: </label>
        <input
          type="text"
          value={this.state.filename}
          onChange={(event) => this.setState({ filename: event.target.value })}
        />
        <br />
        <label>Background Color: </label>
        <input
          type="color"
          value={this.state.backgroundColor}
          onChange={(event) =>
            this.setState({ backgroundColor: event.target.value })
          }
        />
        <br />
        <label>Text Color: </label>
        <input
          type="color"
          value={this.state.textColor}
          onChange={(event) => this.setState({ textColor: event.target.value })}
        />
        <br />
        <button type="submit" onClick={this.onFormSubmit}>
          Generate Presentation
        </button>
      </div>
    );
  }
}

export default App;

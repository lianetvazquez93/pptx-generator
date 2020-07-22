import React from "react";
import generatePresentation from "./services/presentationGenerator";

class App extends React.Component {
  state = {
    filename: "",
    content: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    generatePresentation(this.state.filename, this.state.content);

    this.setState({
      content: "",
      filename: "",
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
        <button type="submit" onClick={this.onFormSubmit}>
          Generate Presentation
        </button>
      </div>
    );
  }
}

export default App;

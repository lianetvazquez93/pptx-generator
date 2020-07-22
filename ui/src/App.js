import React from "react";

class App extends React.Component {
  state = {
    content: "",
    filename: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
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

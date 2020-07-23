import React from "react";
import PreviewPanel from "./PreviewPanel";
import InputPanel from "./InputPanel";
import ErrorWell from "./ErrorWell";
import presentationGenerator from "../services/presentationGenerator";

class App extends React.Component {
  state = {
    filename: "default.pptx",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    hasErrors: false,
    errorMsg: "",
  };

  handleError = (errorMsg) => {
    this.setState({
      hasErrors: true,
      errorMsg,
    });
    console.log(this.state.hasErrors);
  };

  previewPresentation = ({ filename, content, backgroundColor, textColor }) => {
    this.setState({
      filename,
      content,
      backgroundColor,
      textColor,
    });
  };

  generatePresentation = ({
    filename,
    content,
    backgroundColor,
    textColor,
  }) => {
    presentationGenerator(
      filename,
      content,
      backgroundColor,
      textColor
    ).catch((error) => this.handleError(error.message));
  };

  render() {
    return (
      <div>
        {this.state.hasErrors ? (
          <ErrorWell message={this.state.errorMsg} />
        ) : null}
        <div className="container-fluid">
          <PreviewPanel
            content={this.state.content}
            filename={this.state.filename}
            backgroundColor={this.state.backgroundColor}
            textColor={this.state.textColor}
          />
          <InputPanel
            handleError={this.handleError}
            previewPresentation={this.previewPresentation}
            generatePresentation={this.generatePresentation}
          />
        </div>
      </div>
    );
  }
}

export default App;

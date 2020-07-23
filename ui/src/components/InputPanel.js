import React from "react";

class InputPanel extends React.Component {
  state = {
    filename: "",
    content: "",
    backgroundColor: "#ffffff",
    textColor: "#000000",
  };

  previewPresentation = (event) => {
    event.preventDefault();

    this.props.previewPresentation(this.state);
  };

  generatePresentation = (event) => {
    event.preventDefault();

    this.props.generatePresentation(this.state);

    this.setState({
      filename: "",
      content: "",
      backgroundColor: "#ffffff",
      textColor: "#000000",
    });
  };

  render() {
    return (
      <div className="container-fluid mt-5 h-100">
        <div className="col-1"></div>
        <div className="col-10 m-auto">
          <div className="form-group p-0 m-0">
            <label>Enter content</label>
            <input
              type="text"
              className="form-control"
              value={this.state.content}
              onChange={(event) =>
                this.setState({ content: event.target.value })
              }
            />
          </div>
          <div className="row mt-2">
            <div className="col-4 mr-auto">
              <label>Enter file name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.filename}
                onChange={(event) =>
                  this.setState({ filename: event.target.value })
                }
              />
            </div>
            <div className="col-2 mx-auto">
              <label>Background</label>
              <input
                type="color"
                className="form-control"
                value={this.state.backgroundColor}
                onChange={(event) =>
                  this.setState({ backgroundColor: event.target.value })
                }
              />
            </div>
            <div className="col-2 ml-auto mr-1">
              <label>Text</label>
              <input
                type="color"
                className="form-control"
                value={this.state.textColor}
                onChange={(event) =>
                  this.setState({ textColor: event.target.value })
                }
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-5 mr-auto">
              <button
                type="submit"
                className="btn btn-info btn-md btn-block"
                onClick={this.previewPresentation}
              >
                Preview Presentation
              </button>
            </div>
            <div className="col-2"></div>
            <div className="col-5 ml-auto">
              <button
                type="submit"
                className="btn btn-info btn-md btn-block"
                onClick={this.generatePresentation}
              >
                Generate Presentation
              </button>
            </div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    );
  }
}

export default InputPanel;

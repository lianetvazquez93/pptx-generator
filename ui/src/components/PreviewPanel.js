import React from "react";

const PreviewPanel = (props) => {
  return (
    <div className="container-fluid h-100 mt-5">
      <div className="col-1"></div>
      <div className="col-10 m-auto p-4">
        <div className="row">
          <span className="p-2">{props.filename}</span>
        </div>
        <div className="row border border-dark" style={{ backgroundColor: props.backgroundColor }}>
          <p
            className="text-left p-5"
            style={{ color: props.textColor }}
          >
            {props.content}
          </p>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default PreviewPanel;

import React from "react";

class BUTT extends React.Component {
  render() {
    const { label, start } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={start}
          className="btn btn-outline-primary"
        >
          {" "}
          {label}{" "}
        </button>
      </div>
    );
  }
}

export default BUTT;

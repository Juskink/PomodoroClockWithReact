import React from "react";

class Controls extends React.Component {
  render() {
    return (
      <div id="controls">
        <button id="start" onClick={this.props.startTimer}>
          start
        </button>
        <button id="start_stop" onClick={this.props.stopTimer}>
          Stop
        </button>
        <button id="reset" onClick={this.props.refresh}>
          Refresh
        </button>
      </div>
    );
  }
}
export default Controls;

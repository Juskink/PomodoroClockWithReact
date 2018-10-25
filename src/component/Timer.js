import React from "react";

class Timer extends React.Component {
  // is it going against best practice if i re-format the props??
  // should this function be in the clock component??
  displayTime = () => {
    let minutes = Math.floor(
      (this.props.timer % (1000 * 60 * 60)) / (1000 * 60)
    );
    let seconds = Math.floor((this.props.timer % (1000 * 60)) / 1000);
    let clock = +minutes + ":" + (seconds >= 10 ? seconds : "0" + seconds);
    return clock;
  };
  render() {
    return (
      <div id="timer">
        <h2>{this.props.label}</h2>
        <input
          value={this.displayTime()}
          onChange={this.props.onChange()}
          maxLength="3"
          size="3"
          readOnly
        />
      </div>
    );
  }
}

export default Timer;

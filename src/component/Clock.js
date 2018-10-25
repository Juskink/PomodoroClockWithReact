import React from "react";
import Session from "./Session";
import Break from "./Break";
import Timer from "./Timer";
import Controls from "./controls";


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: 25,
      break: 5,
      timer: 1500000,
      label: "Session"
    };
  }

  startTimer = () => {
    this.interval = setInterval(this.timer, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
  };

  refresh = () => {
    clearInterval(this.interval);
    this.setState({
      timer: 1500000,
      session: 25,
      label: "Session",
      break: 5
    });
  };

  timer = () => {
    this.setState({
      timer: this.state.timer - 1000
    });
  };

  // this is an event handler for the generic button component
  // ?? should this be further abstracted by generalising the parameters and include the start,
  // stop and refresh functionality in order to cover all the buttons in the project.??
  update = (incrementValue, btnName) => {
    switch (btnName) {
      case "session":
        if (this.state.timer > 60000) {
          this.setState({
            session: this.state.session + incrementValue,
            timer: this.state.timer + incrementValue * 60000
          });
        }
        break;
      case "break":
        if (this.state.break > 1) {
          this.setState({
            break: this.state.break + incrementValue
          });
        }
        break;
      default:
        break;
    }
  };

  onChange = () => {
    if (this.state.timer <= 0) {
      // this.playAudio();
      this.state.label === "Session"
        ? this.setState({ label: "Break", timer: this.state.break * 60000 })
        : this.setState({
            label: "Session",
            timer: this.state.session * 60000
          });
    }
  };

  playAudio = () => {
    let audio = new Audio(sound);
    audio.play();
  };

  render() {
    return (
      <div id="clock">
        <h1 id="header">Pomodoro Clock</h1>
        <Session session={this.state.session} update={this.update} />
        <Break break={this.state.break} update={this.update} />
        <Timer
          timer={this.state.timer}
          label={this.state.label}
          onChange={this.onChange}
        />
        <Controls
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          refresh={this.refresh}
        />

        <audio id="myAudio">
          <source src="./component/sound/countdown.wav" type="audio/wav" />
        </audio>
      </div>
    );
  }
}
// Is there a better place for the html audio element or should i be using a different method all together to play audio.
export default Clock;

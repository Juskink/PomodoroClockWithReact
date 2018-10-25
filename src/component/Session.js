import React from "react";
import Button from "./Button";

class Session extends React.Component {
  render() {
    return (
      <div>
        <h2 id="session-label">Session</h2>
        <Button
          name="session"
          id="session-decrement"
          // put values in JSX in curly Brackets
          incrementValue={-1}
          onClick={this.props.update}
          symbol="-"
        />
        <input
          id="session-length"
          value={this.props.session}
          maxLength="3"
          size="3"
          readOnly
        />
        <Button
          name="session"
          id="session-increment"
          incrementValue={1}
          onClick={this.props.update}
          symbol="+"
        />
      </div>
    );
  }
}
export default Session;

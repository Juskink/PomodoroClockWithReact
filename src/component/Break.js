import React from "react";
import Button from "./Button";

class Break extends React.Component {
  render() {
    return (
      <div>
        <h2 id="break-label">Break</h2>
        <Button
          name="break"
          id="break-decrement"
          incrementValue={-1}
          symbol="-"
          onClick={this.props.update}
        />
        <input
          id="break-length"
          value={this.props.break}
          maxLength="3"
          size="3"
          readOnly
        />
        <Button
          name="break"
          id="break-increment"
          incrementValue={1}
          symbol="+"
          onClick={this.props.update}
        />
      </div>
    );
  }
}
export default Break;

import React from "react";

class Button extends React.Component {
  // a call back to ensure the function doesnt continuously fire and a parameter to create flexibility
  handleClick = () => {
    this.props.onClick(this.props.incrementValue, this.props.name);
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.symbol}</button>;
  }
}

export default Button;

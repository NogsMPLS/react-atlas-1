import React from "react";
import ClassNames from "classnames";

import Ripple from "../ripple";
import style from "./button.css";

class Button extends React.Component {
  static propTypes = {
    accent: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    href: React.PropTypes.string,
    icon: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    primary: React.PropTypes.bool,
    ripple: React.PropTypes.bool,
    type: React.PropTypes.string
  };

  static defaultProps = {
    accent: false,
    className: "",
    primary: false,
    ripple: true
  };

  handleMouseDown = (event) => {
    if (this.refs.ripple) this.refs.ripple.start(event);
    if (this.props.onMouseDown) this.props.onMouseDown(event);
  };

  handleMouseUp = () => {
    this.refs.button.blur();
  };

  render () {
    const {accent, children, className, href, icon, inverse, primary, ripple, ...others} = this.props;
    const element = href ? "a" : "button";
    const level = primary ? "primary" : accent ? "accent" : "neutral";
    const classes = ClassNames([style.toggle, style[level]], {[style.inverse]: inverse}, className);

    const props = {
      ...others,
      href,
      ref: "button",
      className: classes,
      disabled: this.props.disabled,
      onMouseDown: this.handleMouseDown,
      onMouseUp: this.handleMouseUp
    };

    return React.createElement(element, props,
      ripple ? <Ripple ref="ripple" centered /> : null,
      children
    );
  }
}

export default Button;

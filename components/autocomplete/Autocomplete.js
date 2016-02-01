import React, {Component, PropTypes} from "react";
import classNames from "classnames/bind";
import Input from "../input";
import Suggestions from "./Suggestions";
import style from "./autocomplete.css";

const propTypes = {
  /* Sets a class to the style of the component */
  className: React.PropTypes.string,
  /* Determines if the dropdown will drop up, or down.  Auto will choose between Up or Down */
  direction: React.PropTypes.oneOf(["auto", "up", "down"]),
  /* Determines if content will be disabled */
  disabled: React.PropTypes.bool,
  /* The error string for the label (unsure if this will be used) */
  error: React.PropTypes.string,
  /* The string for the floating label (unsure if this will be used) */
  label: React.PropTypes.string,
  onChange: React.PropTypes.func,
  /* An object of key/value pairs for all suggestions */
  source: React.PropTypes.any.isRequired,
  /* A single or array of values currently selected for this component*/
  value: React.PropTypes.any
};

const defaultProps = {
  className: '',
  disabled: false,
  focus: false
};

class Autocomplete extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      direction: this.props.direction,
      focus: false

      /* non-selected values of the componet*/
    }
  };
/* if the state of this isn't focused, and it has a focus in it's next state, and direction is AUTO,
  calculate direction */
  shouldComponentUpdate () {
    return true
  }

  /* */
  handleChange = () => {

  };
  /*  */
  handleQueryBlur = () => {
    {console.log("BLURRRED", this.state.focus)}
    this.setState({focus: false});
  };

  /*  */
  handleQueryChange = (value) => {

  };

  /* On focus, set .focus to show*/
  handleQueryFocus = () => {
    {console.log("source value: ", this.props.source)}
    this.setState({focus: true});
  };

  handleQueryKeyUp = (event) => {
    {console.log("this input value is now: ", event)}
  };

  handleSuggestionHover = (key) => {

  };

  /* if set to auto, determine if the direction should be up or down.*/
  calculateDirection () {

  }
  
  /* test data */

  render () {

    const {className, disabled, inline, name, label, ...props} = this.props;
    const cx = classNames.bind(style);

    let inputClassName = cx({
      focus: this.state.focus,
      input: true
    });

    return (
      <div className={className}>
        <Input
          ref="input"
          {...props}
          className={inputClassName}
          onBlur={this.handleQueryBlur}
          onChange={this.handleQueryChange}
          onFocus={this.handleQueryFocus}
          onKeyUp={this.handleQueryKeyUp}
        />
        <Suggestions focus={this.state.focus} suggestions={this.props.source} />
      </div>
    );
  }
}

export default Autocomplete;

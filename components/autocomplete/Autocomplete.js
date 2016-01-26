import React, {Component, PropTypes} from "react";
import classNames from "classnames/bind";
import Input from "../input";
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
  focus: false,
  source: {}
};

class Autocomplete extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      direction: this.props.direction,
      focus: false,
      /* non-selected values of the componet*/
      query: this.query(this.props.value)
    }
    console.log("This state's focus: ", focus)
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
    {console.log("FOCUSED ON INPUT", this.state.focus)}
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

  /* handles the query */
  query () {

  }
  
  /* test data */
  const suggestions ={
      'a':'A',
      'b':'B',
      'c':'C',
      'd':'D',
      'e':'E',
      'f':'F',
      'g':'G'
  };

  renderSuggestions () {
    /* This method returns a <ul> with <li> elements inside it for each 'suggestion' that remains unselected */
    /* */
    const {className, disabled, inline, name, label, dropdown} = this.props;
    const cx = classNames.bind(style);


    /* Classnames for the ul */
    let dropDownItemClass = cx({
      focus: this.state.focus,
      dropdown: true
    });

    /* Classnames for the li */
    let liItemClass = cx({
      liItem: true
    });

    /* render of li of suggestions */
    const suggestionList = [this.suggestions].map((key, value) => {
      console.log("key", key);
      console.log("value", value);

      let liClassName = cx({

      });
      return (
        <li className={liClassName}>
          {value}
        </li>
      );
    })

    /* render of ul containing each li element */
    return(

        <ul className={dropDownItemClass}>
          {suggestionList}
        </ul>
    );
  }

  render () {

    const {className, disabled, inline, name, label} = this.props;
    const cx = classNames.bind(style);

    let inputClassName = cx({
      focus: this.state.focus,
      input: true
    });

    return (
      <div className={className}>
        <Input
          ref="input"
          {...this.props}
          className={inputClassName}
          onBlur={this.handleQueryBlur}
          onChange={this.handleQueryChange}
          onFocus={this.handleQueryFocus}
          onKeyUp={this.handleQueryKeyUp}
          value={this.state.query}
        />
        {this.renderSuggestions()}
      </div>
    );
  }
}

export default Autocomplete;

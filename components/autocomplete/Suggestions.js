import React, {Component, PropTypes} from "react";
import classNames from "classnames/bind";
import style from "./autocomplete.css";

const defaultProps = {
  suggestions: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.object
    ])
};

class Suggestions extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      suggestions: this._query(this.props.suggestions)
    }
  };

  _query = (source) => {
    const query = source;
    console.log("_query", query);
    /* Apparently the ECMAScript standard to check if object is an Array is to call the object prototype toString method*/
    if(Object.prototype.toString.call(query) === '[object Array]'){
      //dont really need to do anything
      console.log("Object is an array: ");
      var a = new Map(query.map((item) => [item, item]));
      console.log(a);
      return new Map(query.map((item) => [item, item]));
    }
    else{
      console.log("Object is an Object");
      var a = new Map(Object.keys(query).map((key) => [key, query[key]]));
      console.log(a);
      return new Map(Object.keys(query).map((key) => [key, query[key]]));
    }
  };

  render (){
    const {suggestions, ...props} = this.props;
    const cx = classNames.bind(style);

    let ulClassName = cx({
      focus: focus,
    });

    let liClassName = cx({

    });

    return(
      <ul className={ulClassName} >
        {
          this.state.suggestions.forEach(function(value, key){
            return (
              <li className={liClassName}>
                {key + ' = ' + value}
              </li>
            );
          }, this.state.suggestions)
        }
      </ul>
    );
  }
}

export default Suggestions;
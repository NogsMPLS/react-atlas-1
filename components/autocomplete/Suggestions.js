import React, {Component, PropTypes} from "react";
import classNames from "classnames/bind";
import style from "./autocomplete.css";

const defaultProps = {
  source: React.PropTypes.any,
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
      console.log("QUERYYY: ", query);
      return query;
    }
    else{
      console.log(new Map(Object.keys(query).map((key) => [key, query[key]])));
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
          Object.keys(this.state.suggestions).map((key, value) => {
            return (
              <li className={liClassName}>
                {this.state.suggestions[key]}
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default Suggestions;
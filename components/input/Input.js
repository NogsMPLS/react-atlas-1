import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import style from './input.css';

const propTypes = {
    "disabled": PropTypes.bool,
    "className": PropTypes.string,
    "htmlFor": PropTypes.string,
    "maxLength": PropTypes.number,
    "inputText": PropTypes.string,
    "focus": PropTypes.string,
    "labelText": PropTypes.string,
    "multiline": PropTypes.bool,
    "type": PropTypes.string,
    "value": PropTypes.string,
    "onChange": PropTypes.func
  };

const defaultProps = {
    "disabled": false,
    "type": 'text',
    "inputLength": 0,
    "focus": false
  };

class Input extends Component {
    render () {
        const { disabled, labelText, maxLength, multiline, type, value, ...others} = this.props;

        const cx = classNames.bind(style);

        let inputClassName = cx({
          "input": true,
          disabled,
          multiline,
          value
        });

        if (this.props.className) inputClassName += ` ${this.props.className}`;

        return (
          <div>
            <label {...this.props} className={style.label}>{labelText}</label>
            <input {...this.props} className={inputClassName} onChange={this.props.onChange} type={type} />
          </div>
        );
    }
}

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;

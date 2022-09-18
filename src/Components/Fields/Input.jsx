import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Input({
  className, label, name, value, type, changeEvent,
  blurEvent, focusEvent, errorFeedBack, validation,
}) {
  return (
    <div className={classNames('w-full pb-3 text-left', className)}>
      <label htmlFor={name}>{label}</label>
      <input
        className="w-full h-12 px-3 mt-3 border border-purple-300 rounded-md focus:outline-purple-300"
        type={type}
        name={name}
        value={value}
        placeholder={label}
        onBlur={blurEvent}
        onFocus={focusEvent}
        onChange={changeEvent}
      />
      {validation === 'warning' && <small className="text-xs text-red-500">{errorFeedBack}</small>}
    </div>
  );
}

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  validation: PropTypes.string,
  changeEvent: PropTypes.func.isRequired,
  blurEvent: PropTypes.func,
  focusEvent: PropTypes.func,
  errorFeedBack: PropTypes.string.isRequired,
};

Input.defaultProps = {
  className: '',
  validation: false,
  type: 'text',
  blurEvent: () => {},
  focusEvent: () => {},
};

export default Input;

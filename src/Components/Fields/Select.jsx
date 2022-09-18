import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Select({
  className, label, name, value, options, changeEvent,
  blurEvent, focusEvent, errorFeedBack, validation,
}) {
  return (
    <div className={classNames('w-full pb-3 text-left', className)}>
      <label htmlFor={name}>{label}</label>
      <select
        className="w-full h-12 px-3 mt-3 border border-purple-300 rounded-md focus:outline-purple-300"
        name={name}
        value={value}
        onBlur={blurEvent}
        onFocus={focusEvent}
        onChange={changeEvent}
      >
        <option value="">Choose....</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.title}
          </option>
        ))}
      </select>
      {validation === 'warning' && <small className="text-xs text-red-500">{errorFeedBack}</small>}
    </div>
  );
}

Select.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  validation: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  changeEvent: PropTypes.func.isRequired,
  blurEvent: PropTypes.func,
  focusEvent: PropTypes.func,
  errorFeedBack: PropTypes.string.isRequired,
};

Select.defaultProps = {
  className: '',
  validation: '',
  blurEvent: () => {},
  focusEvent: () => {},
};

export default Select;

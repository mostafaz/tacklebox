import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Button({
  className,
  disabled,
  clickEvent,
  children,
}) {
  return (
    <div className="w-full">
      <button
        className={classNames('bg-purple-500 hover:bg-purple-600 text-white px-5 h-12 block w-full rounded-md', className)}
        disabled={disabled}
        type="button"
        onClick={clickEvent}
      >
        {children}
      </button>
    </div>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  clickEvent: PropTypes.func.isRequired,
};

Button.defaultProps = {
  className: '',
};

export default Button;

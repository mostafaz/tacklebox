import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Form({ className, children }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <form className={classNames('max-w-lg w-full m-auto bg-white p-10 text-gray-500 rounded-md', className)}>
        {children}
      </form>
    </div>
  );
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Form.defaultProps = {
  className: '',
};

export default Form;

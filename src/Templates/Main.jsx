import React from 'react';
import classNames from 'classnames';
import Head from 'next/head';
import PropTypes from 'prop-types';

function Main({
  className, title, description, children,
}) {
  return (
    <main className={classNames(' bg-gray-100 min-h-screen flex flex-col justify-center', className)}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
Main.defaultProps = {
  className: '',
};
export default Main;

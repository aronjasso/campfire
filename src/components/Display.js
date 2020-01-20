import classNames from 'classnames';
import React from 'react';

const Display = ({ children, className, size, ...other }) => {
  const classes = classNames({
    [`display-${size}`]: true
  }, className);

  return (
    <h1 className={classes} {...other}>{children}</h1>
  );
};

Display.defaultProps = {
  size: 1
};

export default Display;

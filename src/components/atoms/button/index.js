/* eslint-disable react/button-has-type */
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.module.css'

const Button = ({ children, white, type, onClick, className }) => (
  <button
    type={type}
    onClick={onClick}
    className={classNames(styles.btn, { [styles.white]: white }, className)}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  white: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  type: 'button',
  white: false,
  onClick: () => {},
  className: undefined,
}

export default Button

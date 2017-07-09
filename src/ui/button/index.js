/**
 * Created by colin on 2017/6/20.
 */

import './button.scss';

import React from 'react';
import PropTypes from 'prop-types';
import MixClass from '../../util/mixClass';

export default function Button({
  type = 'button',
  style,
  size,
  className = '',
  ...props
}) {

  let styleClass = style ? 'btn-' + style : 'btn-default';
  let sizeClass  = size ? 'btn-size-' + size  : "btn-size-default";

  let finalClass = [styleClass, sizeClass, className].join(' ');

  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className = {finalClass}
      {...props}
    >
      {props.children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  style: PropTypes.string,
  size : PropTypes.string
};
/**
 * Created by colin on 2017/7/6.
 */

import './Icon.scss';

import React from 'react';
import PropTypes from 'prop-types';

export default function Icon({
  label,
  ...props
}) {
  return (
    <i className={'fa ' + label } {...props}></i>
  );
}

Icon.propTypes = {
  label: PropTypes.string
};
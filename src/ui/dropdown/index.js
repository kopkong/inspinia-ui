/**
 * Created by colin on 2017/7/8.
 */
import './DropDown.scss';

import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  title: 'title',
};

export default function DropDown(_props) {
  let props = {
    ... defaultProps,
    ... _props
  };

  return (
    <div></div>
  );
}

DropDown.propTypes = {
  title: PropTypes.string
};
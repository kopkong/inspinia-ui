import './TitleBar.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const defaultProps = {
  rootName: 'Home',
  menuNameList: ['Page']
};

export default function TitleBar(_props) {
  let props = {
    ... defaultProps,
    ... _props
  };

  const currentPageName = props.menuNameList.slice(-1)[0];

  const menuContent = props.menuNameList.map((item,index) => {
    return (
      <span key={'menu' + index}> {item} </span>
    )
  });

  return (
    <div className="title-bar">
      <h1>{currentPageName}</h1>
      <p className="catalog">
        <Link to='/'> { props.rootName } </Link>
        { menuContent }
      </p>
    </div>
  );
}

TitleBar.propTypes = {
  rootName: PropTypes.string,
  menuNameList : PropTypes.arrayOf(PropTypes.string)
};
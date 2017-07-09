/**
 * Created by colin on 2017/7/6.
 */
import './page-header.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PageHeaderContainer extends Component {

  render() {
    return (
      <div className="page-header">
        搜索栏和顶部状态栏
        <input type="search"/>
      </div>
    )
  }
}
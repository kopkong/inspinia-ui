/**
 * Created by colin on 2017/7/7.
 */

import './page-content.scss';

import React, {Component} from 'react';

export default class PageContentContainer extends Component {

  render() {
    return (
      <div className="page-content">
        {this.props.children}
      </div>
    )
  }
}

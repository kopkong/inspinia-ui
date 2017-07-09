/**
 * Created by colin on 2017/7/5.
 */

import './side-bar.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SideMenu from './side-menu';

import {connect} from 'react-redux';

@connect(state => ({
  menu: state.menu
}))
export default class SideBar extends Component {

  render() {
    const menuItemContent = this.props.menu.list.map((item, index) => {
        return (
          <SideMenu key={'menu' + index}
                    title={item.title}
                    link={item.link}
                    icon={item.icon}
                    sub={item.sub}
          />
        )
      }
    );
    return (
      <aside className="side-bar">
        <header className="side-bar-header"/>
        { menuItemContent }
      </aside>
    );
  }
}
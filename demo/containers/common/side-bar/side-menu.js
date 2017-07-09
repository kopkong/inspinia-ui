/**
 * Created by colin on 2017/7/6.
 */

import './side-bar.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Icon} from '../../../../src/ui';

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      hasChildren: this.props.sub && this.props.sub.length > 0
    };
  }

  toggleMenu() {
    if (this.state.hasChildren) {
      this.setState({
        collapsed: !this.state.collapsed
      });
    }
  }

  render() {
    let subMenuList = [];
    if (this.state.hasChildren) {
      subMenuList = this.props.sub.map((sub, index) => {
        return <li key={index}><Link to={sub.link}> {sub.title} </Link></li>;
      })
    }

    let containsSubMenu = subMenuList.length > 0;
    let subMenuContent = containsSubMenu ?
      <ul className={'sub-menu-list' + (this.state.collapsed ? '' : ' enter') }>
        { subMenuList }
      </ul>
      : null;

    let arrowContent = containsSubMenu ? this.state.collapsed ?
        <Icon label="fa-angle-left"/> : <Icon label="fa-angle-down"/> : null;

    return (
      <div className={this.state.collapsed ? '' : 'active'}>
        <p onClick={ this.toggleMenu.bind(this) }>
          <Link to={this.props.link}>
                        <span className="title">
                            {this.props.icon ?
                              <Icon label={this.props.icon}/> : null
                            }
                          {this.props.title}
                        </span>
            <span className="arrow">{arrowContent}</span>
          </Link>
        </p>
        { subMenuContent }
      </div>
    )
  }
}

SideMenu.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  sub: PropTypes.array,
  collapsed: PropTypes.bool
};
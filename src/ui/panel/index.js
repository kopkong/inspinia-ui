/**
 * Created by colin on 2017/7/7.
 */
import './Panel.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from '../icon';

import MixClass from '../../util/mixClass';

export default class Panel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed || false,
      fullScreen: false,
      hidePanel: false
    };
  }

  togglePanel() {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  showPop() {

  }

  fullScreen() {
    this.setState({
      fullScreen: !this.state.fullScreen
    })
  }

  closePanel() {
    this.setState({
      hidePanel: true
    })
  }

  render() {
    if (this.state.hidePanel) return null;

    const footer = this.props.hasFooter ? <footer>
        <div className="left">{this.props.footerText}</div>
        <div className="right">{this.props.footerRightText}</div>
      </footer> : null;

    let classNames = MixClass({
      ...this.props,
      myClass: this.state.fullScreen? 'panel-full' : 'panel-default'
    });

    let contentStyle = this.props.contentHeight > 0 ? {
      height: this.props.contentHeight + 'px',
      overflow: 'auto'
    }: null;

    return (
      <div className={classNames} >
        <header>
          <h2>
            {this.props.title}
            {this.props.subTitle ? <span className="subTitle">this.props.subTitle</span> : null}
          </h2>
          <div className="panel-controls">
            {
              this.props.hideCollapsedButton ?
                null : <Icon label={this.state.collapsed ? 'fa-chevron-up' : 'fa-chevron-down'}
                             onClick={this.togglePanel.bind(this)}/>
            }
            {
              this.props.hideConfigButton ?
                null : <Icon label="fa-wrench" onClick={this.showPop.bind(this) }/>
            }
            {
              this.props.hasFullSizeButton ?
                <Icon label="fa-expand" onClick={this.fullScreen.bind(this) }/>
                :null
            }
            {
              this.props.hideCloseButton ?
                null : <Icon label="fa-times" onClick={this.closePanel.bind(this)}/>
            }
          </div>
        </header>
        <div className={'content' + (this.state.collapsed ? ' collapsed-very-fast' : ' expanded-very-fast')} style={contentStyle}>
          {this.props.children}
        </div>
        {footer}
      </div>
    );
  }
}

Panel.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  defaultCollapsed: PropTypes.bool,
  hasFooter: PropTypes.bool,
  footerText: PropTypes.string,
  footerRightText: PropTypes.string,
  hideCollapsedButton: PropTypes.bool,
  hideConfigButton: PropTypes.bool,
  hasFullSizeButton: PropTypes.bool,
  hideCloseButton: PropTypes.bool,
  configItems: PropTypes.arrayOf(PropTypes.object),
  contentHeight: PropTypes.number
};
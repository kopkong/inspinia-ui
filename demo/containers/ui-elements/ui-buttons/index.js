/**
 * Created by colin on 2017/7/7.
 */

import '../../../styles/_layouts.scss';
import './UIButtons.scss';

import React, {Component} from 'react';
import TitleBar from '../../../components/title-bar';
import {Panel, Button} from '../../../../src/ui';

export default class UIButtonsContainer extends Component {

  render() {
    const menuNames = ['UI Elements', 'Buttons'];
    return (
      <div className="ui-buttons">
        <TitleBar menuNameList={menuNames}/>

        <div className="normal-content-page">
          <Panel title="Color Buttons">
            <p>Use any of the available button classes to quickly create a styled button.</p>
            <p><b>Normal Buttons</b></p>
            <div className="normal-buttons">
              <Button>Default</Button>
              <Button style="primary">Primary</Button>
              <Button style="success">Success</Button>
              <Button style="info">Info</Button>
              <Button style="warning">Warning</Button>
              <Button style="danger">Danger</Button>
              <Button style="link">Link</Button>
            </div>
          </Panel>

          <Panel title="Different Size" className="mt20">
            <p>If You want larger or smaller buttons You can add .btn-lg, .btn-sm, or .btn-xs class.</p>
            <p><b>Button Size</b></p>
            <div>
              <Button style="primary" size="large">Large Button</Button>
              <Button size="large">Large button</Button>
            </div>
            <div>
              <Button style="primary">Default Button</Button>
              <Button >Default button</Button>
            </div>
            <div>
              <Button style="primary" size="small">Small Button</Button>
              <Button size="small">Small button</Button>
            </div>
            <div>
              <Button style="primary" size="mini">Mini Button</Button>
              <Button size="mini">Mini button</Button>
            </div>
          </Panel>

          <Panel title="Outline and Block Buttons" className="mt20">
            <p><b>OutLine Buttons</b></p>
            <Button style="default-outline">Default</Button>
            <Button style="primary-outline">Primary</Button>
            <Button style="success-outline">Success</Button>
            <Button style="info-outline">Info</Button>
            <Button style="warning-outline">Warning</Button>
            <Button style="danger-outline">Danger</Button>
            <Button style="link-outline">Link</Button>
            <p><b>Block Button</b></p>
            <Button style="primary-outline" className="block-btn">Block</Button>
          </Panel>

          <Panel title="3D Buttons" className="mt20"></Panel>
        </div>
      </div>
    )
  }
}
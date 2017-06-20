/**
 * Created by colin on 2017/6/16.
 */

import React from 'react';
import { Component } from 'react';
import { Button } from '../ui';

import { connect } from 'react-redux';

@connect(state=> ({
    modal: state.modal
}))
export default class TemplateContainer1 extends Component {
    componentDidMount(){
        // console.log(this.props);
    }

    showModal() {
        // console.log(this.props);
        this.props.dispatch({
            type: 'Modal.ShowMessageBox',
            data: {
                messageText: '测试消息弹窗'
            }
        });
    }

    render() {
        return (
        <div>
            <h1>Template1</h1>

            <Button label="打开Modal" onClick={this.showModal.bind(this)}/>
        </div>
        )
    }
}
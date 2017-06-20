/**
 * Created by colin on 2017/6/20.
 * 全局显示用的容器组件.
 */

import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import ModalComponent from '../components/modal';

@connect(state => ({
    modal: state.modal
}))
export default class TopContainer extends Component {
    render() {
        const modal = this.props.modal.hide ? null :
            <ModalComponent {...this.props.modal}/>;

        return (
            <div>
                {modal}
            </div>
        )
    }
}
/**
 * Created by colin on 2017/6/16.
 */

import './modal.scss';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Button } from '../../ui';

@connect(state => ({
    modal: state.modal
}))
export default class ModalComponent extends Component{
    componentWillMount(){
        console.log('componentWillMount');
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate(previousProps, previousState){
        console.log('componentDidUpdate', previousProps , previousState);
    }

    componentWillUnmount(){
        console.log('componentWillUnmount');
    }

    hideSelf() {
        this.props.dispatch({
            type: 'Modal.Hide'
        })
    }

    render() {
        const dialogContent = <span>{this.props.messageText}</span>;

        const dialogFooter = this.props.needConfirm && this.props.onConfirm ?
            <div>
                <Button className="modal-dialog-cancel" label={this.props.cancelText || '取消'} onClick={this.hideSelf.bind(this)} />
                <Button className="modal-dialog-confirm" label={this.props.confirmText || '确定'} onClick={this.props.onConfirm } />
            </div>
            :
            <div>
                <Button className="modal-dialog-ok" label={this.props.okText || '好'} onClick={this.hideSelf.bind(this)}/>
            </div>
        ;

        return (
            this.props.hide ? null :
                <div className="masked" >
                    <div className="modal-container modal-dialog-opened">
                        <div className="modal-dialog-content">
                            {dialogContent}
                        </div>
                        <div className="modal-dialog-footer">
                            {dialogFooter}
                        </div>
                    </div>
                </div>
        );
    }
}

ModalComponent.propTypes = {
    messageText: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText : PropTypes.string,
    okText : PropTypes.string,
    needConfirm: PropTypes.bool,
    hide: PropTypes.bool,
    onConfirm: PropTypes.func
};
/**
 * Created by colin on 2017/6/20.
 */

import './button.scss';

import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
    label           : 'Button',
    disabled        : false,
    lock            : false,
    className       : 'button-default'
};

export default function Button(_props){
    let props = {
        ... defaultProps,
        ... _props
    };


    function handleClick(){
        if(props.locked) return;

        if(props.onClick) {
            props.onClick();
        }

        if(props.delay) {
            props.locked = true;
            setTimeout(()=>{
                props.locked = false;
            }, props.delay);
        }
    }

    return (
        <button
            type="button"
            className ={ props.className }
            onClick ={ handleClick }
            disabled ={ props.disabled }
            >
            {props.label}
        </button>
    );
}

Button.propTypes = {
    disabled        : PropTypes.bool,
    className       : PropTypes.string,
    label           : PropTypes.string,
    onClick         : PropTypes.func,
    delay           : PropTypes.number
};
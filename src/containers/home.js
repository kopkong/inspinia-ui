/**
 * Created by colin on 2017/6/14.
 */

import React from 'react';
import { Component } from 'react';

import { Link } from 'react-router-dom';

export default class HomeContainer extends Component {
    render() {
        return (
        <div>
            <h2>欢迎来投票</h2>
            <ul>
                <li><Link to="/tp1">模版1</Link></li>
                <li><Link to="/tp2">模板2</Link></li>
            </ul>
        </div>
        )
    }
}
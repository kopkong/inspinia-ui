/**
 * Created by colin on 2017/7/7.
 */

import { combineReducers } from 'redux';

import { menu } from './menu';
import { page } from './page';

export const appReducers = combineReducers({
    menu
});
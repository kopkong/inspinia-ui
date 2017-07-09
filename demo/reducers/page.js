/**
 * Created by colin on 2017/7/7.
 */

const initialState = {
    root: 'Home',
    mainMenu: '',
    subMenu: ''
};

export function page(state = initialState, { type = '', data = {} }) {

    switch (type) {
        case 'Set':
            return {
                ...state,
                ...data
            };
        default:
            return state;
    }
}
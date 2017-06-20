/**
 * Created by colin on 2017/6/20.
 */

const initialState = {
    messageText : 'Message Info',
    confirmText : 'Confirm',
    cancelText  : 'Cancel',
    okText      : 'OK',
    needConfirm : false,
    hide        : true
};

export function modal(state = initialState, { type = '', data = {} }) {
    switch (type) {
        case 'Modal.ShowMessageBox':
            console.log(state);
            console.log(data);
            return {
                ...state,
                ...data,
                hide: false
            };
        case 'Modal.ShowConfirmBox':
            return {
                ...state,
                ...data,
                hide: false
            };
        case 'Modal.Hide':
            return {
                ...state,
                ...data,
                hide: true
            };
        default:
            return state;
    }
}
import {
    TODO_LIST,TODO_LIST_URL
} from '../helpers/constants';

require('es6-promise').polyfill();
// require('isomorphic-fetch');

export function fetchTodoList() {
    return function (dispatch) {
        fetch(TODO_LIST_URL).then((response) => {
            return response.json();
        }).then((data) => {
            dispatch({
                type: TODO_LIST,
                payload: data
            });
        }).catch(error => {
            console.log('error', error);
        });
    };
}
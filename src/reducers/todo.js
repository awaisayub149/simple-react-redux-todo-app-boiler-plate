import {
    TODO_LIST,TODO_UPDATE
} from "../helpers/constants";

export default function product(state = {
    todos: [],
}, action) {
    switch (action.type) {
        case TODO_LIST: //on load api call response will store here
            {
                return {
                    ...state,
                    todos: action.payload
                };
            }
        case TODO_UPDATE: //todo mark done or undone here
            {
                return { 
                    ...state, 
                    todos: state.todos.map(
                        (todo) => todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo
                    )
                 }
            }
        default:
            {
                if (action.type.indexOf('@@') === -1) {
                    // console.log('case not handled in reducer: ', action.type);
                }
            }
    }
    return state;
}
// actions
import reducersConfig from './actions';

// init state
const initState = {
    name: 'terry',
    count: 0,
    users: [],
    isPending: false
};

// reducers
const todoApp = (state = initState, action = {}) => {

    let newState;

    if (reducersConfig.hasOwnProperty(action.type)) {

        newState = Object.assign({}, state, action.payload);

    }
    else {

        newState = state;

    }

    return newState;

};

export default todoApp;

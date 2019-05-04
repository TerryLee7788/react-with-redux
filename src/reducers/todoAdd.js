// actions
import reducersConfig from './actions';

// init state
const initState = {
    name: 'terry',
    count: 0
};

// reducers
const todoApp = (state = initState, action = {}) => {

    let newState;

    if (reducersConfig.hasOwnProperty(action.type)) {

        const omg = reducersConfig[action.type](action.payload);
        newState = Object.assign({}, state, omg.data);

    }
    else {

        newState = state;

    }

    return newState;

};

export default todoApp;

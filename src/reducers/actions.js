import actionTypes from './constants';

// reducers config 設置
const reducersConfig = {
    [actionTypes.greeting]: (payload) => {
        
        return {
            type: actionTypes.greeting,
            payload,
            data: {
                name: payload
            }
        };

    },
    [actionTypes.add]: (state, action) => ({ ...state, count: state.count + action.payload })
};

export default reducersConfig;

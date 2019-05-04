import actionTypes from './constants';

// reducers actions config 設置
const reducersConfig = {
    [actionTypes.greeting]: (payload) => {

        return {
            type: actionTypes.greeting,
            // payload 專門定義回傳給 reducer 的資料結構~
            payload: {
                name: payload
            }
        };

    },
    [actionTypes.requestPendding]: (payload) => {

        return {
            type: actionTypes.requestPendding,
            payload: {
                isPending: payload.data.isPending
            }
        }

    },
    [actionTypes.requestSuccess]: (payload) => {
        return {
            type: actionTypes.requestSuccess,
            payload
        };
    },
    // cached 'dispath'
    [actionTypes.sendRequest]: () => (dispath) => {

        // request 在 pendding
        dispath({
            type: actionTypes.requestPendding,
            payload: {
                isPending: true
            }
        });

        // fake ajax request
        setTimeout(() => {

            const fakeData = {
                statusCode: 200,
                data: {
                    users: [
                        { name: 'terry' },
                        { name: 'terry1' },
                        { name: 'terry2' },
                    ]
                }
            };
            // 成功獲取資料
            dispath({
                type: actionTypes.requestSuccess,
                payload: { ...fakeData.data, isPending: false}
            });
            // 錯誤的情境沒寫

        }, 3000);

    },
    // 'actionTypes.add' is old code, this function need to be updated
    [actionTypes.add]: (state, action) => ({ ...state, count: state.count + action.payload })
};

export default reducersConfig;

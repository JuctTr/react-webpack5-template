/**
 * 全局的 Reducer
 */
function pageReducer(state: any, action: { type: any; payload: any }) {
    switch (action.type) {
        case '__setStore':
            state = Object.assign(state, action.payload);
            break;
        default:
            console.error('reducer error', action);
            return state;
    }
    return { ...state };
}

export default pageReducer;

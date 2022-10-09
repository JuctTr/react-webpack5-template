/**
 *
 */
import { IGlobalState } from './Counter';
const initialState = {
    count: 0,
};

function reducer(state = initialState, action: { type: string }): IGlobalState {
    // just gonna leave this blank for now
    // which is the same as `return undefined;`

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        default:
            return state;
    }
}

export default reducer;

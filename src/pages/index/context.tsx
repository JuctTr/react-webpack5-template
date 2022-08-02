import React, {
    createContext,
    JSXElementConstructor,
    ReactElement,
    ReactFragment,
    ReactPortal,
    useContext,
    useReducer,
} from 'react';

const WriteContext = createContext(null);
const ReadContext = createContext(null);

const useWriteContext = () => useContext(WriteContext);
const useReadContext = () => useContext(ReadContext);

class initialState {
    i = 0;
}

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

export default function Context(props: {
    children:
        | string
        | number
        | boolean
        | ReactElement<any, string | JSXElementConstructor<any>>
        | ReactFragment
        | ReactPortal
        | null
        | undefined;
}) {
    const [state, dispatch] = useReducer(pageReducer, new initialState());

    return (
        <WriteContext.Provider value={dispatch}>
            <ReadContext.Provider value={state}>{props.children}</ReadContext.Provider>
        </WriteContext.Provider>
    );
}

export { useWriteContext, useReadContext };

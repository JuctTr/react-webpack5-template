import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReactDOM from 'react-dom/client';

import Counter from './Counter';
import Reducer from './Reducer';

const state = createStore(Reducer);

class App extends React.Component {
    render(): React.ReactNode {
        return (
            <Provider store={state}>
                <Counter />
            </Provider>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

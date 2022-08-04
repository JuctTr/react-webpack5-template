import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { Nothing, ReadComponent, WriteComponent } from './components/index';
import Context from './context';
import './index.scss';

function Index(): React.ReactElement {
    return (
        <Context>
            <div className="page">Hello React + Webpack5 + TypeScript</div>
            <Nothing />
            <ReadComponent />
            <WriteComponent />
        </Context>
    );
}

// class Index extends React.Component {
//     constructor(props: any | Readonly<any>) {
//         super(props);
//     }
//     // componentWillMount() {}
//     render(): React.ReactNode {
//         return <div>Demo</div>;
//     }
// }

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * @document https://zh-hans.reactjs.org/docs/strict-mode.html
 */
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);

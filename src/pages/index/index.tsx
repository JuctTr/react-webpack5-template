import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Nothing, ReadComponent, WriteComponent } from './components/index';
import Context from './context';
import './index.scss';

function Index(): React.ReactElement {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        console.log('useLayoutEffect => ');
        return () => {
            console.log('useLayoutEffect Destroy => ');
        };
    });
    useEffect(() => {
        console.log('useEffect => ');
        return () => {
            console.log('useEffect Destroy => ');
        };
    }, []);
    const addCount = () => {
        setCount(pre => ++pre);
    };

    return (
        <Context>
            <div className="page">Hello React + Webpack5 + TypeScript</div>
            <Nothing />
            <ReadComponent />
            <WriteComponent />
            <div className="box">{count}</div>
            <button onClick={addCount}>Add</button>
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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

/**
 * @document https://zh-hans.reactjs.org/docs/strict-mode.html
 */
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);

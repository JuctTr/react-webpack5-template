import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '../../common/utils';
import './index.scss';

function App(): React.ReactElement {
    const [count, setCount] = useState(0);

    const updateCount = () => {
        setCount(count => ++count);
    };

    return (
        <div>
            <button onClick={updateCount}>点击更新</button>
            {count}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

/**
 * @document https://zh-hans.reactjs.org/docs/strict-mode.html
 */
root.render(<App />);

import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '../../common/utils';

function Index(): React.ReactElement {
    const [count, setCount] = useState(0);

    console.log('count => ', count);

    const updateCount = () => {
        setCount(function add1(count) {
            return count + 1;
        });
        setCount(function add3(count) {
            return count + 2;
        });
        setCount(function add6(count) {
            return count + 3;
        });
    };

    return (
        <div>
            <button onClick={updateCount}>点击更新数目</button>
            {count}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

/**
 * @document https://zh-hans.reactjs.org/docs/strict-mode.html
 */
root.render(<Index />);

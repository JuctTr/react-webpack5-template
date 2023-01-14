import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '../../common/utils';

function Index(): React.ReactElement {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        log.info('useLayoutEffect => ');
        if (count === 0) {
            const randomNum = 10 + Math.random() * 200;
            const now = performance.now();
            while (performance.now() - now < 3000) {
                //阻塞一段时间
                // console.log('blocking...');
            }
            setCount(10 + Math.random() * 200);
        }
    }, [count]);

    // useEffect(() => {
    //     log.info('useEffect => ');
    //     if (count === 0) {
    //         const randomNum = 10 + Math.random() * 200;

    //         const now = performance.now();

    //         while (performance.now() - now < 1000) {
    //             //阻塞一段时间
    //             // console.log('blocking...');
    //         }
    //         setCount(10 + Math.random() * 200);
    //     }
    // }, [count]);

    return <div onClick={() => setCount(0)}>{count}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * @document https://zh-hans.reactjs.org/docs/strict-mode.html
 */
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);

// function Index(): React.ReactElement {
//     const [count, setCount] = useState('hello world');
//     useLayoutEffect(() => {
//         log.info('useLayoutEffect => ');

//         // let i = 0;
//         // while (i <= 1000000000) {
//         //     i++;
//         // }
//         setCount('world hello change');
//         debugger;
//         return () => {
//             // debugger;
//             log.error('useLayoutEffect Destroy => ');
//         };
//     });
//     useEffect(() => {
//         log.info('useEffect => ');
//         // let i = 0;
//         // while (i <= 1000000000) {
//         //     i++;
//         // }
//         setCount('world hello change');
//         debugger;
//         return () => {
//             // debugger;
//             log.error('useEffect Destroy => ');
//         };
//     });
//     const addCount = () => {
//         setCount('add hello world');
//     };

//     return (
//         <>
//             <div className="box">{count}</div>
//             <button onClick={addCount}>change</button>
//         </>
//     );
// }

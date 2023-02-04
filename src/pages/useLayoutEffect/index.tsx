import React, { useEffect, useState, useRef, useCallback, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '../../common/utils';

function Index(): React.ReactElement {
    const [count, setCount] = useState(0);
    const [mockArr, setMockArr] = useState(() =>
        new Array(10000).fill('tab').map((item, index) => item + '--' + index)
    );

    // useLayoutEffect(() => {
    //     log.info('useLayoutEffect => ');
    //     if (count === 0) {
    //         const randomNum = 10 + Math.random() * 200;
    //         const now = performance.now();
    //         while (performance.now() - now < 3000) {
    //             //阻塞一段时间
    //             // console.log('blocking...');
    //         }
    //         setCount(randomNum);
    //         setMockArr([...mockArr]);
    //     }
    // }, [count]);

    useEffect(() => {
        log.info('useEffect => ');
        const randomNum = 10 + Math.random() * 200;
        if (count === 0) {
            const now = performance.now();
            while (performance.now() - now < 1000) {
                //阻塞一段时间
                // console.log('blocking...');
            }
            setCount(randomNum);
            setMockArr([...mockArr]);
        }
    }, [count]);

    return (
        <div>
            <h1>useLayoutEffect 的执行时机是浏览器把内容真正渲染到界面之前，和 componentDidMount 等价</h1>
            {count}
            <button onClick={() => setCount(0)}>点击更新组件</button>
            <h1>useEffect 的执行时机是浏览器完成渲染之后异步执行</h1>
            <h1
                style={{
                    color: 'red',
                }}
            >
                所以你看到useEffect的例子会有闪烁的现象，先变回0 =》 随机数， 而useLayoutEffect没有
            </h1>
            {mockArr.map((item: any) => (
                <li key={item}>{item}</li>
            ))}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

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

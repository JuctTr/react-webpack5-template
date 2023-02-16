/**
 * 【注意】：此例子是在 react 16.12.0 版本测试，请到 public / index.html中修改 cdn的版本
 */
import React, { useEffect, useState } from 'react';
import ReactDOM, { unstable_batchedUpdates } from 'react-dom';
import { log } from '../../common/utils';

const fetchData = (): Promise<string> => Promise.resolve('success');

function usePageInit() {
    const [a, setA] = useState(0);
    const [b, setB] = useState({});
    const [c, setC] = useState<number[]>([]);
    const [d, setD] = useState(true);

    useEffect(() => {
        // 同步 1次 init render 1次 re-render
        // setA(a => a + 1);
        // setB({ b: 0 });
        // setC([0]);
        // setD(false);
        // 异步, 1次 init render 4次 re-render
        fetchData()
            .then(res => {
                log.info(res);
                setA(a => a + 1);
                setB({ b: 0 });
                setC([0]);
                setD(false);
            })
            .catch(error => console.log(error));
        // 把异步也变成, 1次 init render 1次 re-render
        // fetchData()
        //     .then(res => {
        //         log.info(res);
        //         unstable_batchedUpdates(() => {
        //             setA(a => a + 1);
        //             setB({ b: 0 });
        //             setC([0]);
        //             setD(false);
        //         });
        //     })
        //     .catch(error => console.log(error));
    }, []);

    return {
        a,
        b,
        c,
        d,
    };
}

function Index(): React.ReactElement {
    log.error('Index render');

    const { a, b, c, d } = usePageInit();
    console.log(a, b, c, d);

    const [num, setNum] = useState(0);

    const updateNum = () => {
        setNum(num => num + 1);
        setNum(num => num + 1);
        setNum(num => num + 1);
        setNum(num => num + 1);
        setNum(num => num + 1);
    };

    return (
        <div>
            <button onClick={updateNum}>点击 num</button>
        </div>
    );
}

/**
 * 【注意】：此例子是在 react 16.12.0 版本测试，请到 public / index.html中修改 cdn的版本
 */
ReactDOM.render(<Index />, document.getElementById('root') as HTMLElement);

/**
 * React 18.2.0
 */
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
/**
 * @document https://zh-hans.reactjs.org/docs/strict-mode.html
 */
// root.render(<Index />);

import React, { useEffect, useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '@src/common/utils';

/* 用react.memo */
// eslint-disable-next-line react/display-name
const DemoChildren = React.memo((props: { getInfo: (sonName: string) => void }) => {
    /* 只有初始化的时候打印了 子组件更新 */
    console.log('子组件更新');
    useEffect(() => {
        props.getInfo('子组件');
    }, []);
    return <div>子组件</div>;
});

// const DemoChildren = props => {
//     /* 只有初始化的时候打印了 子组件更新 */
//     console.log('子组件更新');
//     useEffect(() => {
//         props.getInfo('子组件');
//     }, []);
//     return <div>子组件</div>;
// };

const DemoUseCallback = () => {
    log.error('父组件 render');
    const [number, setNumber] = useState(1);
    /* 此时usecallback的第一参数 (sonName)=>{ console.log(sonName) }
      经过处理赋值给 getInfo */
    const getInfo = useCallback((sonName: string) => {
        console.log(sonName);
    }, []);
    return (
        <div>
            {/* 点击按钮触发父组件更新 ，但是子组件没有更新 */}
            <button onClick={() => setNumber(number + 1)}>增加</button>
            <DemoChildren getInfo={getInfo} />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<DemoUseCallback />);

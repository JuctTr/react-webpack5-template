import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '@src/common/utils';

const mockList1: string[] = new Array(10000).fill('tab1').map((item, index) => item + '--' + index);
const mockList2: string[] = new Array(10000).fill('tab2').map((item, index) => item + '--' + index);
const mockList3: string[] = new Array(10000).fill('tab3').map((item, index) => item + '--' + index);

const tab: Record<string, string[]> = {
    tab1: mockList1,
    tab2: mockList2,
    tab3: mockList3,
};

function App() {
    const [active, setActive] = React.useState('tab1'); //需要立即响应的任务，立即更新任务
    const deferActive = React.useDeferredValue(active); // 把状态延时更新，类似于过渡任务
    const handleChangeTab = (activeItem: any) => {
        setActive(activeItem); // 立即更新
        console.log('立即更新');
    };
    const renderData = tab[deferActive]; // 使用滞后状态
    console.log('延迟');
    return (
        <div>
            <div className="tab">
                {Object.keys(tab).map((item, index) => (
                    <button
                        key={index}
                        className={(active === item && 'active') as string}
                        onClick={() => handleChangeTab(item)}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <ul className="content">
                {renderData.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

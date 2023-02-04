import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '@src/common/utils';

/* 模拟数据 */
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
    const [renderData, setRenderData] = React.useState(tab[active]); //不需要立即响应的任务，过渡任务
    const [isPending, startTransition] = React.useTransition();
    const handleChangeTab = (activeItem: any) => {
        setActive(activeItem); // 立即更新
        startTransition(() => {
            // startTransition 里面的任务优先级低
            setRenderData(tab[activeItem]);
        });
    };
    useEffect(() => {
        log.info('render => ');
    });
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
                {isPending && <div> loading... </div>}
                {renderData.map((item: any) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

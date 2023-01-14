import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import CountDown from './CountDown';
import { log } from '../../common/utils';

function Index() {
    log.info('Index');
    const [second, setSecond] = useState(10);

    const changeProps = () => {
        setSecond(100);
    };

    return (
        <div>
            <CountDown initSecond={second} />
            <button onClick={changeProps}>改变属性</button>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

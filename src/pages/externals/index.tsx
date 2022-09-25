import React from 'react';
import { createRoot } from 'react-dom';
// import ReactDOM from 'react-dom/client'; // 官方是建议这个，但是在设置第三方包，只识别react-dom
// import _ from 'lodash';
import './index.scss';

class Index extends React.Component {
    render(): React.ReactNode {
        return <div>externals 配置</div>;
    }
}

// console.log(_.head([1, 2, 3]));

const root = createRoot(document.getElementById('root'));
root.render(<Index />);

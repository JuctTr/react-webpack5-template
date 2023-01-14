import ReactDOM from 'react-dom/client';
import React, { Component } from 'react';
import BorderHoc from './BorderHoc';

// 用BorderHoc装饰目标组件
// @BorderHoc
class TargetComponent extends React.Component {
    render() {
        // 目标组件具体的业务逻辑
        return (
            <>
                <h1>首页</h1>
            </>
        );
    }
}

// export出去的其实是一个被包裹后的组件
const Index = BorderHoc(TargetComponent);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);

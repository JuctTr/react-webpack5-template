import ReactDOM from 'react-dom/client';
import React, { useState, useRef, useCallback } from 'react';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        a: 1,
        b: 2,
        c: 3,
    };
    UNSAFE_componentWillMount() {
        console.log('【UNSAFE_componentWillMount】', '获取后台数据');
    }
    // UNSAFE_componentWillReceiveProps() {
    //     console.log('【UNSAFE_componentWillReceiveProps】');
    // }
    // UNSAFE_componentWillUpdate() {
    //     console.log('【UNSAFE_componentWillUpdate】');
    // }
    componentDidMount() {
        console.log('【componentDidMount】', '获取后台数据');
    }

    /**
     * 在组件实例化之后以及重新渲染之前调用
     * @param props
     * @param state
     * @returns
     */
    // static getDerivedStateFromProps(props, state) {
    //     console.log('【getDerivedStateFromProps】', props, state);
    //     const newState = {
    //         d: 4,
    //     };
    //     // debugger;
    //     return newState || null;
    // }

    componentDidUpdate(prevProps, prevState, SnapshotValue) {
        // debugger;
        console.log('【componentDidUpdate】', prevProps, prevState, SnapshotValue);
    }
    /**
     * 在更新之前（如：更新 DOM 之前）被调用。此生命周期的返回值将作为第三个参数传递给 componentDidUpdate
     * @param prevProps 本次渲染上一次的props
     * @param prevState 本次渲染上一次的state
     * @returns
     */
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     // debugger;
    //     console.log('【getSnapshotBeforeUpdate】', prevProps, prevState);
    //     return true;
    // }

    changeA = () => {
        let { a } = this.state;
        this.setState({
            a: ++a,
        });
    };

    render(): React.ReactNode {
        console.log('【render】=> ', '执行render函数');
        const { a, b, c } = this.state;
        return (
            <div>
                打印：{a}
                输出：{b}
                <button onClick={this.changeA}>点击改变a</button>
                {/* {console.log('视图更新')} */}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

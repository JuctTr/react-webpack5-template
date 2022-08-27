import { log } from '@src/common/utils';
import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component<any, any> {
    parentRef: any;
    childRef: any;
    constructor(props: any) {
        super(props);
        this.parentRef = React.createRef();
        this.childRef = React.createRef();
    }
    componentDidMount() {
        log.info('React componentDidMount！');
        // document.addEventListener('click', e => {
        //     log.info('原生事件：document DOM 事件监听！');
        // });
        this.parentRef.current?.addEventListener(
            'click',
            () => {
                log.info('原生事件：父元素 DOM 事件监听！');
            },
            true
        );
        this.childRef.current?.addEventListener(
            'click',
            (e: any) => {
                // e.stopPropagation();
                // e.stopImmediatePropagation();
                log.info('原生事件：子元素 DOM 事件监听！');
            },
            true
        );
    }
    parentClickFun = (e: any) => {
        console.log(e);
        console.log(e.nativeEvent);
        log.info('React 事件：父元素事件监听！');
    };
    childClickFun = (e: any) => {
        // e.stopPropagation();
        log.info('React 事件：子元素事件监听！');
    };
    handerChange = value => console.log(value);
    render() {
        return (
            <div id="parent" ref={this.parentRef} onClick={this.parentClickFun}>
                <div id="child" ref={this.childRef} onClick={this.childClickFun}>
                    分析事件执行顺序
                </div>
                <input placeholder="请输入内容" onChange={this.handerChange} />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

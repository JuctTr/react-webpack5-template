import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { log } from '@src/common/utils';

// =================== Demo one 普通函数现象 ====================
// class App extends React.Component<any, any> {
//     childClickFun = () => {
//         console.log('React 事件');
//     };
//     clickFun() {
//         console.log('React this 指向问题', this); // undefined
//     }
//     render() {
//         return <div onClick={this.clickFun}>React this 指向问题</div>;
//     }
// }

// =================== Demo two 利用bind绑定this上下文 ====================
// class App extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//         this.clickFun = this.clickFun.bind(this);
//     }
//     childClickFun = () => {
//         console.log('React 事件');
//     };
//     clickFun() {
//         console.log('React this 指向问题', this); // undefined
//     }
//     render() {
//         return <div onClick={this.clickFun}>React this 指向问题</div>;
//     }
// }

// =================== Demo three 利用箭头函数的特点====================
// class App extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//     }
//     childClickFun = () => {
//         console.log('React 事件');
//     };
//     clickFun = () => {
//         console.log('React this 指向问题', this); // undefined
//     };
//     render() {
//         return <div onClick={this.clickFun}>React this 指向问题</div>;
//     }
// }
// =================== Demo four 利用箭头函数的特点2 ====================
class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }
    childClickFun = () => {
        console.log('React 事件');
    };
    clickFun() {
        console.log('React this 指向问题', this); // undefined
    }
    render() {
        return <div onClick={() => this.clickFun()}>React this 指向问题</div>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

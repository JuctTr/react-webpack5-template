import { log } from '@src/common/utils';
import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        log.info('React componentDidMount！');
        // 第一个例子
        this.setState({
            count: 1,
        });
        console.log(this.state.count);
        this.setState({
            count: 2,
        });
        console.log(this.state.count);
        this.setState({
            count: 3,
        });
        console.log(this.state.count);
        // 第二个例子
        // setTimeout(() => {
        //     this.setState(
        //         {
        //             count: 8,
        //         },
        //         () => {
        //             console.log('setTimeout setState callback => ', this.state);
        //         }
        //     );
        //     console.log(this.state.count);
        //     this.setState({
        //         count: 9,
        //     });
        //     console.log(this.state.count);
        //     this.setState({
        //         count: 10,
        //     });
        //     console.log(this.state.count);
        // });
        // 可以看出来，在React版本：18.2.0中，setState都是批量处理的

        // 第三个例子
        // this.setState({
        //     count: 1,
        // });
        // console.log(this.state.count);
        // setTimeout(() => {
        //     this.setState({
        //         count: 10,
        //     });
        //     console.log('setTimeout => ', this.state.count);
        // });
        // this.setState({
        //     count: 2,
        // });
        // console.log(this.state.count);
    }
    render() {
        log.info('render: ', this.state.count);
        return (
            <div id="parent">
                <h1>React版本：18.2.0</h1>
                {this.state.count}
                <div id="child">setState 是异步的还是同步的？</div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

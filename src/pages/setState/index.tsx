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
        this.setState({
            count: 1,
        });
        setTimeout(() => {
            this.setState({
                count: 8,
            });
            this.setState({
                count: 9,
            });
            this.setState({
                count: 10,
            });
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
    }
    render() {
        console.log('render:', this.state.count);
        return (
            <div id="parent">
                {this.state.count}
                <div id="child">setState 是异步的还是同步的？</div>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

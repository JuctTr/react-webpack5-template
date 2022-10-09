import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

interface IProps {
    dispatch: Dispatch;
    count: number;
}

export interface IGlobalState {
    count: number;
    [propName: string]: unknown;
}

class Counter extends React.Component<IProps> {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    };

    decrement = () => {
        this.props.dispatch({ type: 'DECREMENT' });
    };

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        );
    }
}

// 添加这个函数：
function mapStateToProps(state) {
    return {
        count: state.count,
    };
}
export default connect(mapStateToProps)(Counter);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

class FuckEvent extends React.PureComponent {
    state = {
        showBox: false,
    };
    componentDidMount() {
        document.body.addEventListener('click', this.handleClickBody, false);
    }
    componentWillUnmount() {
        document.body.removeEventListener('click', this.handleClickBody, false);
    }
    handleClickBody = () => {
        console.log('this.handleClickBody');
        this.setState({
            showBox: false,
        });
    };
    handleClickButton = e => {
        e.stopPropagation();
        this.setState({
            showBox: true,
        });
    };

    render() {
        console.log('render FuckEvent', this.state);
        return (
            <div>
                <button onClick={this.handleClickButton}>点击我显示弹窗</button>

                {this.state.showBox && (
                    <div className="box" onClick={e => e.stopPropagation()}>
                        我是弹窗
                    </div>
                )}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FuckEvent />);

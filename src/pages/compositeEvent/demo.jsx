import React from 'react';
import ReactDOM from 'react-dom/client';

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
        this.setState({
            showBox: false,
        });
    };
    handleClickButton = () => {
        this.setState({
            showBox: true,
        });
    };

    render() {
        return (
            <div>
                <button onClick={this.handleClickButton}>点击我显示弹窗</button>

                {this.state.showBox && <div onClick={e => e.stopPropagation()}>我是弹窗</div>}
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FuckEvent />);

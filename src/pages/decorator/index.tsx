import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageConfig as connect } from './decorator';

@connect({
    d: 1,
    e: true,
    f: 'fff',
})
export default class Index extends React.Component {
    render(): React.ReactNode {
        return <></>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

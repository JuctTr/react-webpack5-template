import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageConfig } from './decorator';

@PageConfig({
    d: 1,
    e: true,
    f: 'fff',
})
export default class Index extends React.Component {
    componentDidMount() {
        console.log('【index】=> ');
    }
    render(): React.ReactNode {
        return <></>;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

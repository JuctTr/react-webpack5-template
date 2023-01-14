import React from 'react';
import ReactDOM from 'react-dom/client';
import { PageConfig as connect } from './decorator';
import Demo from './demo';

@connect({
    d: 1,
    e: true,
    f: 'fff',
})
export default class Index extends React.Component {
    render(): React.ReactNode {
        return (
            <>
                <Demo />
            </>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);

import React from 'react';
import ReactDOM from 'react-dom/client';
import FunctionHOC from './FunctionHOC';
import ContentItem from './ContentItem';
import { IContentCard } from './ContentItem';
// import { RenderHijackComponent } from './RenderHijack';

import './index.scss';

const staticItemList = [
    {
        key: '1',
        a: 1,
        b: 2,
    },
    {
        key: '2',
        a: 1,
        b: 2,
    },
    {
        key: '3',
        a: 1,
        b: 2,
    },
    {
        key: '4',
        a: 1,
        b: 2,
    },
];

const ContentList = FunctionHOC<
    IContentCard,
    {
        onItemClick: (content: IContentCard) => void;
    }
>(ContentItem);

class Index extends React.Component {
    onItem = () => {
        console.log('item点击xxxxx');
    };

    render(): React.ReactNode {
        return <ContentList itemList={staticItemList} onItemClick={this.onItem} />;
        // return <RenderHijackComponent visible={false} />;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

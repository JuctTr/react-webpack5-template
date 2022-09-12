import React from 'react';

export interface IContentCard {
    key: string;
    a: number;
    b: number;
}

export default function ContentItem(props: {
    key: string;
    item: IContentCard;
    onItemClick: (content: IContentCard) => void;
}) {
    const { item, onItemClick } = props;
    return (
        <div className="item">
            <img
                src="https://img10.360buyimg.com/img/jfs/t1/206080/22/18820/19010/61baa38cEf2cd0912/309b3b20a0a6b743.png"
                alt=""
            />
            <div>公共组件，比如瀑布流中的每一个Item</div>
            <button onClick={() => onItemClick(item)}>点击打印</button>
        </div>
    );
}

import React, { memo, useEffect } from 'react';

/**
 *
 * @param ItemComponent
 * @returns
 */
export default function HOC<R, T>(
    ItemComponent: (props: T & { item: R; key: string }) => React.ReactElement | null,
    options?: {
        itemBaseHeight?: number;
        keyField?: string;
        heightField?: string;
    }
): (
    props: T & {
        itemList: R[];
        // fun1?: () => React.ReactElement | null;
        // fun2?: () => void;
        // fun3?: () => void;
    }
) => React.ReactElement | null {
    return function list(
        props: T & {
            itemList: R[];
            // fun1?: () => React.ReactElement | null;
            // fun2?: () => void;
            // fun3?: () => void;
        }
    ): React.ReactElement {
        const itemHeight = options?.itemBaseHeight;
        console.log(itemHeight);

        const { itemList } = props;

        useEffect(() => {
            console.log('HOC组件渲染');
        });

        return (
            <div>
                {itemList.map(item => {
                    return <ItemComponent {...props} item={item} key={item.key}></ItemComponent>;
                })}
            </div>
        );
    };
}

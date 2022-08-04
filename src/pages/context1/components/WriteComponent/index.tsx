import React from 'react';
import { useGlobalContext } from '../../context';
import { log } from '@common/utils';

let j = 0;

export default function WriteComponent() {
    log.info('WriteComponent', 're-render');

    const { dispatch } = useGlobalContext();
    const changeContext = () => {
        dispatch({
            type: '__setStore',
            payload: {
                i: ++j,
            },
        });
        console.log('j => ', j);
    };

    return (
        <div>
            改变Context的值：
            <a className="App-link" onClick={changeContext}>
                点击改变
            </a>
        </div>
    );
}

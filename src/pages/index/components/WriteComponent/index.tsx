import React from 'react';
import { useWriteContext } from '../../context';
import { log } from '../../../../common/utils';

export default function WriteComponent() {
    log.info('WriteComponent', 're-render');

    const dispatch = useWriteContext();

    const changeContext = () => {
        dispatch({
            type: '__setStore',
            payload: {
                i: Math.random(),
            },
        });
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

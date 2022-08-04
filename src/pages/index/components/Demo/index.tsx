import React from 'react';
import { log } from '@common/utils';

export default function Demo() {
    log.info('Demo', 're-render');
    // eslint-disable-next-line prefer-const
    let [i, setI] = React.useState(0);

    const changeI = () => {
        setI(++i);
    };

    return (
        <div>
            <span>Demo {i}</span>
            <a onClick={changeI}>点击改变</a>
        </div>
    );
}

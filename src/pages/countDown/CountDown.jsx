import React, { useState, useEffect, useRef } from 'react';
import { log } from '../../common/utils';

function CountDown(props) {
    log.info('CountDown');
    const timer = useRef(null);

    // eslint-disable-next-line react/prop-types
    const [value, setValue] = useState(props.initSecond);

    useEffect(() => {
        timer.current = setInterval(() => {
            if (value > 0) {
                setValue(pre => --pre);
            }
        }, 1000);
        return () => {
            clearInterval(timer.current);
        };
    }, [value]);

    return <div>{value}</div>;
}

export default CountDown;

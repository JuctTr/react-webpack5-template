import { useGlobalContext } from '../../context';
import { log } from '@common/utils';
import React from 'react';

export default function ReadComponent() {
    log.info('ReadComponent', 're-render');
    const state = useGlobalContext();
    return <div>读取Context的值：{state && state.i}</div>;
}

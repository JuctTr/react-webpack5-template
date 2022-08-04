import React from 'react';
import { log } from '@common/utils';

export default function Nothing() {
    log.info('Nothing', 're-render');
    return <div>Nothing</div>;
}

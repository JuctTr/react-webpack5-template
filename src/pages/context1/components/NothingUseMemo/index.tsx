import React from 'react';
import { log } from '@common/utils';

function NothingUseMemo(props: { skuId: any }) {
    log.info('NothingUseMemo', 're-render');
    const { skuId } = props;

    return React.useMemo(() => {
        log.info('NothingUseMemo', 'useMemo re-render');
        return <div>NothingUseMemo {skuId}</div>;
    }, [skuId]);
}

export default NothingUseMemo;

import React from 'react';
import { log } from '@common/utils';
import { useGlobalContext } from '../../context';

function NothingMemo(props: { skuId: any }) {
    log.info('NothingMemo', 're-render');
    const { skuId } = props;

    return <div>NothingMemo skuId: {skuId}</div>;
}

export default React.memo(NothingMemo, (preProps, nextProps) => {
    if (preProps.skuId != nextProps.skuId) {
        return false;
    }
    return true;
});

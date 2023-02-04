import React, { useReducer } from 'react';
import ReactDOM from 'react-dom/client';
import { Nothing, ReadComponent, WriteComponent, NothingUseMemo, NothingMemo } from './components/index';
import { globalStore, globalContext } from './context';
import pageReducer from './reducer';
import { log } from '@common/utils';
import './index.scss';

function Index(): React.ReactElement {
    log.info('Index', 're-render');
    const [state, dispatch] = useReducer(pageReducer, new globalStore());

    return (
        <globalContext.Provider value={{ state, dispatch }}>
            <div className="page">Hello context1</div>
            <Nothing />
            <NothingMemo skuId="12345678" />
            <NothingUseMemo skuId="1234567890" />
            <ReadComponent />
            <WriteComponent />
        </globalContext.Provider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Index />);

import React, { useState, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

function Index(): React.ReactElement {
    return <div className="page">Hello React + Webpack5 + TypeScript</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>
);

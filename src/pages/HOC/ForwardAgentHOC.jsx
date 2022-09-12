import React from 'react';

/**
 * 正向属性代理
 * @param {*} WrapComponent
 * @returns
 */
function HOC(WrapComponent) {
    return class Advance extends React.Component {
        state = {
            name: 'alien',
        };
        render() {
            return <WrapComponent {...this.props} {...this.state} />;
        }
    };
}

import React, { Component } from 'react';

function BorderHoc(WrappedComponent: any) {
    return class f extends Component {
        render() {
            return (
                <div style={{ border: 'solid 1px red' }}>
                    <WrappedComponent />
                </div>
            );
        }
    };
}

export default BorderHoc;

import React from 'react';

function RenderHijack(WrapComponent: any) {
    return class Index extends WrapComponent {
        render() {
            if (this.props.visible) {
                return super.render();
            } else {
                return <div>暂无数据</div>;
            }
        }
    };
}

class demo extends React.Component {
    render(): React.ReactNode {
        return <>有数据了</>;
    }
}

export const RenderHijackComponent = RenderHijack(demo);

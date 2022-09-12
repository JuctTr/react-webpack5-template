import React from 'react';

class Index extends React.Component {
    render() {
        return <div> hello,world </div>;
    }
}
function HOC(Component) {
    return class wrapComponent extends Component {
        /* 直接继承需要包装的组件 */
    };
}
export default HOC(Index);

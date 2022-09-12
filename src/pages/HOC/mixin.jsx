import React from 'react';

const customMixin = {
    /* 自定义 mixins */
    componentDidMount() {
        console.log('------componentDidMount------');
    },
    say() {
        console.log(this.state.name);
    },
};

function componentClassMixins(Component, mixin) {
    /* 继承 */
    for (const key in mixin) {
        Component.prototype[key] = mixin[key];
    }
}

componentClassMixins(Index, customMixin);

export default class Index extends React.Component {
    constructor() {
        super();
        this.state = { name: 'alien' };
    }
    render() {
        return (
            <div>
                {' '}
                hello,world
                <button onClick={this.say.bind(this)}> to say </button>
            </div>
        );
    }
}

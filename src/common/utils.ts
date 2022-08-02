export const log = {
    info: function info(...args: any) {
        console.log(`%c【log】: ${args.shift()} `, 'background: #04be02; color: #fff; border-radius: 2px;', ...args);
    },
    warn: function warn(...args: any) {
        console.warn(`【log】:`, ...args);
    },
    error: function error(...args: any) {
        console.error(`【log】:`, ...args);
    },
};

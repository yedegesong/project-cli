module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "node": true,
        "es6": true
    },
    //"extends": "eslint:recommended",
    "extends": "airbnb-base/legacy",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "func-names": 0,
        "no-console": "off", // 开启console
        "global-require": "off", // 关闭全局导入
        "semi": ["error", "never"],// 配置不开启分号;
    }
};
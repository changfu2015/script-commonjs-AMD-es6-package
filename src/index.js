/*
 * @Descripttion:
 * @version:
 * @Author: chagnfu
 * @Date: 2020-05-15 18:21:09
 * @LastEditors: vsCode
 * @LastEditTime: 2020-05-15 18:22:27
 * @email: changfu_chen@qq.com
 */
import FormSwitch from './packages/switch/index.js';

const components = [
    FormSwitch
]

const install = function (Vue, opts = {}) {
    components.map(component => {
        Vue.component(component.name, component);
    })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    FormSwitch
}
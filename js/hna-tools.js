/**
 * Created by cluo on 2016/12/15.
 */
define([
        'Vue',
        'PasswordDialog',
        'ToastManager'
    ],function (Vue,HnaPasswordDialog,HnaToastManager) {

    //注册全局组件
    Vue.component(HnaPasswordDialog.name, HnaPasswordDialog);

    //注册全局函数
    Vue.prototype.$Toast = HnaToastManager;
});
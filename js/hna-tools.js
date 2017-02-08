/**
 * Created by cluo on 2016/12/15.
 */
define([
        'Vue',
        'PasswordDialog',
        'ToastManager',
        'Alert',
        'Telephone'
    ],function (Vue,HnaPasswordDialog,HnaToastManager,HnaAlert,HnaTelephone) {

    //注册全局组件
    Vue.component(HnaPasswordDialog.name, HnaPasswordDialog);
    Vue.component(HnaAlert.name,HnaAlert);
    Vue.component(HnaTelephone.name,HnaTelephone);

    //注册全局函数
    Vue.prototype.$Toast = HnaToastManager;
});
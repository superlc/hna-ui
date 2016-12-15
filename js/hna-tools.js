/**
 * Created by cluo on 2016/12/15.
 */
var pathes = {
    HnaPasswordDialog : 'js/components/hna-password',
    HnaToast : 'js/components/hna-toast'
};
define([
        pathes.HnaPasswordDialog,
        pathes.HnaToast
    ],function (HnaPasswordDialog,HnaToast) {
        return {
            install : function (module,Vue) {
                var component = require(pathes[module]);
                Vue.component(component.name,component);
            }
        };
});
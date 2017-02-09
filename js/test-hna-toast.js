/**
 * Created by cluo on 2017/2/9.
 */

import {HnaVue as Vue} from './hna-tools'

//toast应用
var toastWrapper = new Vue({
    el : '#toast-hint',
    data : {
        content : '提示信息',
        //显示的时长
        duration : 3000,
        //是否展示的开关
        visible : false
    },
    methods : {
        show : function (msg) {
            //调用toast全局函数
            this.$Toast(msg);
        }
    }
});
toastWrapper.show('Hello');
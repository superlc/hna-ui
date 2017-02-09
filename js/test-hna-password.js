/**
 * Created by cluo on 2017/2/9.
 */

import {HnaVue as Vue} from './hna-tools'

new Vue({
    el : '#firstPassword',
    data : {
        count : 6,
        hasbutton : false,
        title : '请设置支付密码'
    },
    methods : {
        //输入合法的值的回调
        completeCallback : function (code) {
            console.log(code);
        },
        //输入非法的值的回调
        errorCallback : function () {

        }
    }
});
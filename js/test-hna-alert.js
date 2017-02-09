/**
 * Created by cluo on 2017/2/9.
 */

import {HnaVue as Vue} from './hna-tools';

var alert = new Vue({
    el : '.status-wrapper',
    data : {
        visible : false,
        type : '',
        text : ''
    },
    methods : {
        show : function (type,text) {
            this.visible = true;
            this.type = type;
            this.text = text;
        },
        hide : function () {
            this.visible = false;
        }
    }
});
alert.show('success','我是提示');

setTimeout(function () {
    alert.hide();
},3000);
/**
 * Created by cluo on 2016/12/11.
 */
define(['Vue'],function (Vue) {
    //注册组件
    Vue.component('hna-password-dialog', {
        props : {
            count : {
                type : Number,
                default : 6
            }
        },
        data : function () {
            return {
                code : ''
            }
        },
        computed :{
            codeArr : function () {
                var ret = [];
                var count = this.count;
                for(var i = 0 ; i < count ; i++){
                    ret[i] = this.code[i];
                }
                return ret;
            }
        },
        template : '<div class="hna-passwordDialog">\
                        <div class="password-view-wrapper">\
                            <div class="password-view">\
                                <div class="password-item pass-item-{{i}}" v-for="i in count">{{codeArr[i-1] || ""}}</div>\
                            </div>\
                            <label class="input-trigger"><input type="tel" v-bind:maxlength="count" v-bind:value="code" v-on:input="chargeInput"></label>\
                        </div>\
                        <div class="btn-wrapper">\
                            <button class="hna-button btn-large btn-strong" v-on:click="submit">确定</button>\
                        </div>\
                    </div>',
        methods : {
            chargeInput : function (e) {
                var _this = e.target || e.srcElement;
                //判断输入的值是否整数
                this.code = _this.value;
            },
            submit : function () {
                var code = this.code;
                console.log(code);
                //判断是否输出符合长度的密码、验证码
                if(code.length < this.count){
                    console.log('请输入符合长度的数值');
                    return;
                }
                //验证输入的数值是否正确
                if(/^\d+$/g.test(code)){
                    console.log(code);
                }else{
                    console.log('请输入整数');
                    return;
                }
            }
        }
    });
    return {
        init : function () {
            var dialog = new Vue({
                el : '#testDialog',
                data : {
                    count : 4
                }
            });
        }
    };
});
/**
 * Created by cluo on 2016/12/11.
 */
define(function () {
    //注册组件
    return {
        name : 'hna-toast',
        data : function(){
            return {
                message : '',
                duration : 3000,
                visible : false,
                timer : null
            };
        },
        template : '<transition name="slide-fade">\
                        <div class="hna-toast" v-show="visible" >\
                            <div class="toast-content">{{message}}</div>\
                        </div>\
                    </transition> ',
        methods : {
            startTimer : function() {
                var _this = this;
                if (_this.duration > 0) {
                    _this.timer = setTimeout(function(){
                        _this.visible = false;
                        clearTimeout(_this.timer);
                    },_this.duration);
                }
            }
        },
        mounted : function () {
            this.startTimer();
        }
    };
});
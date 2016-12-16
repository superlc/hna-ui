/**
 * Created by cluo on 2016/12/11.
 */
define(function () {
    //注册组件
    return {
        name : 'hna-toast',
        props : {
            //toast的提示文本
            content : {
                type : String,
                default : '提示',
                required : true
            },
            duration : {
                type : Number,
                default : 2000
            },
            visible : {
                type : Boolean,
                default : false
            }
        },
        template : '<transition name="slide-fade">\
                        <div class="hna-toast" v-show="visible" >\
                            <div class="toast-content">{{content}}</div>\
                        </div>\
                    </transition> ',
        data : {
            timer : null,
            closed : true
        },
        watch : {
            /*
             visible : function (newValue,oldValue) {
             var _this = this;
             _this.show(_this.content);
             }
             */
        },
        methods : {
            show : function (message) {
                var _this = this;
                _this.content = message;
                _this.visible = true;

                _this.timer = setTimeout(function () {
                    _this.visible = false;
                    clearTimeout(_this.timer);
                },_this.duration);
            }
        }
    };
});
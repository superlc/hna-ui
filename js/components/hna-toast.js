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
                timer : null,
                closed : false,
                onClose: null
            };
        },
        template : '<transition name="slide-fade">\
                        <div class="hna-toast" v-show="visible" >\
                            <div class="toast-content">{{message}}</div>\
                        </div>\
                    </transition> ',
        watch: {
            closed : function(newVal) {
                if (newVal) {
                    this.visible = false;
                    this.$el.addEventListener('transitionend', this.destroyElement);
                }
            }
        },
        methods : {
            destroyElement : function() {
                this.$el.removeEventListener('transitionend', this.destroyElement);
                this.$destroy(true);
                this.$el.parentNode.removeChild(this.$el);
            },
            close : function() {
                this.closed = true;
                if (typeof this.onClose === 'function') {
                    this.onClose(this);
                }
            },
            startTimer : function() {
                var _this = this;
                if (_this.duration > 0) {
                    _this.timer = setTimeout(function(){
                        _this.visible = false;
                        if (!_this.closed) {
                            _this.close();
                        }
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
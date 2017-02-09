/**
 * Created by cluo on 2016/12/26.
 */
/**
 * 组件：hna-alert
 * 描述：用户操作状态的反馈
 * */
 export var HnaAlert = {
        name : 'hna-alert',
        props : {
            //alert的类型
            type : {
                type : String,
                default : 'loading'
            },
            //是否展示文本
            hasText : {
                type : Boolean,
                default : true
            },
            //文本默认为空格进行站位
            text : {
                type : String,
                default : '&nbsp;'
            },
            //显示还是隐藏
            visible : {
                type : Boolean,
                default : false
            }
        },
        data : function () {
            return {
                types : {
                    loading : 'loading',
                    success : 'success',
                    fail : 'fail',
                    warning : 'warning'
                }
            }
        },
        computed : {
            status : function () {
                var _this = this;
                return {
                    loading : _this.type == _this.types.loading,
                    success : _this.type == _this.types.success,
                    fail : _this.type == _this.types.fail,
                    warning : _this.type == _this.types.warning
                };
            }
        },
        template : '<transition name="slide-fade">\
                        <div class="hna-alert" v-show="visible">\
                            <div class="alert-main">\
                            <i class="ico-alert" v-bind:class="{loading : status.loading,success : status.success,fail : status.fail,warning : status.warning}"></i>\
                            <p class="alert-tip">{{text}}</p>\
                            </div>\
                        </div>\
                    </transition> ',
        methods : {
            hide : function () {
                this.visible = false;
            },
            show : function (type,text) {
                if(!type || !text){
                    console.log('请传递展示需要的图标样式类型和文本内容');
                    return;
                }
                this.visible = true;
            }
        }
    };
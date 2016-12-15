# Hna-UI

公司前端UI组件库

- 模块管理、加载：requirejs
- 数据与视图渲染：Vuejs

##UI库组件介绍介绍

UI库使用相对比较容易，大概使用步骤如下

1. 加载UI库主文件
2. 安装想使用的UI组件到项目中
3. 将UI组件挂载到页面上指定的容器中

###密码框组件

- 支持自定义标题、按钮展示与否、
- 支持自定义输入成功、失败的函数处理器

###吐司组件
- 支持自定义展示时长
- 支持自定义显示与隐藏的动画
- 支持自定义显示的文本
- （待扩展）支持吐司在页面的位置

示例代码

    require(['../../js/hna-tools.js','Vue'],function (tools,Vue) {
        //安装相应的组件
        tools.install('HnaPasswordDialog',Vue);
        tools.install('HnaToast',Vue);
		
		//挂载密码框的例子
        new Vue({
            el : '#firstPassword',
            data : {
                count : 6,
                hasbutton : true,
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

        //挂载吐司的例子
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
                    this.content = msg;
                    this.visible = true;
                }
            }
        });
        toastWrapper.show('Hello');

    });


作者：前端C罗
邮箱：470716775@qq.com



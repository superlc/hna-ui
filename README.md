# Hna-password
在项目中有输入密码等场景，hna-password是将这些场景下的应用进行抽象和封装，使用requirejs和vuejs开发组件。

##组件介绍


- 对外仅暴露一个API接口（init），使用简单
- 支持自定义组件的标题、是否展示确认按钮、输入成功和失败的回调
- 跟业务逻辑完全解耦，支持在多种场景下使用




##使用说明

示例代码

    require(['../../js/module/hna-passwordDialog.js'],function (app) {
        app.init('#firstPassword',{
            title : '请确认支付密码',
            hasButton : true,
            completeCallback : function (code) {
                //输入达标后的回调函数
                console.log(code);
            },
            errorCallback : function () {
                //输入的值非法时的回调函数
                console.log(error);
            }
        });
    });

代码说明

模块的封装遵循AMD规范，使用requirejs，同时，使用vuejs来处理数据和视图的双向映射，同步组件内部状态，因此组件是依赖于vuejs，在引用的时候请引入vuejs库



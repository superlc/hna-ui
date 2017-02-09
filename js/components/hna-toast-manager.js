/**
 * Created by cluo on 2016/12/16.
 */

import Vue from '../common/vue';
import { ToastComponent } from './hna-toast'

var seed = 0,
    instance,
    instances = [];
//构造通用的组件生成器
var ToastConstructor = Vue.extend(ToastComponent);

var Toast = function(options) {
    //toast的文本数据
    options = options || {};
    if (typeof options === 'string') {
        options = {
            message: options
        };
    }
    var userOnClose = options.onClose;

    var id = 'toast_' + seed++;

    options.onClose = function() {
        Toast.close(id, userOnClose);
    };

    instance = new ToastConstructor({
        data: options
    });

    instance.id = id;
    instance.vm = instance.$mount();
    //挂到body上
    document.body.appendChild(instance.vm.$el);
    instance.vm.visible = true;
    instance.dom = instance.vm.$el;
    instance.dom.style.zIndex = 9999;
    instances.push(instance);
    return instance.vm;
};

Toast.close = function(id, userOnClose) {
    for (var i = 0, len = instances.length; i < len; i++) {
        if (id === instances[i].id) {
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i]);
            }
            instances.splice(i, 1);
            break;
        }
    }
};

export var HnaToastManager = Toast;
/**
 * Created by cluo on 2016/12/15.
 */
import Vue from './common/vue';
import { HnaPasswordDialog } from './components/hna-password';
import { HnaToastManager } from './components/hna-toast-manager';
import { HnaAlert } from './components/hna-alert';
import { HnaTelephone } from './components/hna-input-telephone'

//注册全局组件
Vue.component(HnaPasswordDialog.name, HnaPasswordDialog);
Vue.component(HnaAlert.name,HnaAlert);
Vue.component(HnaTelephone.name,HnaTelephone);

//注册全局函数
Vue.prototype.$Toast = HnaToastManager;

export var HnaVue = Vue;
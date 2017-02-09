/**
 * Created by cluo on 2017/2/7.
 */
/**
 * 组件：hna-input-phone
 * 描述：电话号码
 * */
export var HnaTelephone = {
        name : 'hna-input-telephone',
        props : {
            hasSpace : {
                type : Boolean,
                default : false
            },
            placeholder : {
                type : String ,
                default : '请输入手机号码'
            }
        },
        data : function () {
            return {
                //输入的手机号
                inputPhone : ''
            }
        },
        computed : {
            phone : function () {
                return this.inputPhone.replace(/\s+/g,'');
            },
            maxLength : function () {
                console.log(this.hasSpace);
                return this.hasSpace ? 13 : 11;
            }
        },
        template : '<input type="tel" class="hna-input" v-model="inputPhone" v-bind:placeholder="placeholder" v-bind:maxlength="maxLength" v-on:keyup="inputNumber"> ',
        methods : {
            /**
             * 校验手机号码是否合法
             * @param phone : [string] 手机号码
             * */
            checkPhoneNumber : function (phone) {
                var testResult = /^1[34578]\d{9}$/.test(phone);
                return testResult;
            },
            /**
             * 监听键盘事件
             * */
            inputNumber : function (e) {
                //检测去重后的号码，如果号码输入合法则调取号码归属地查询的接口
                if(this.checkPhoneNumber(this.phone)){
                    console.log(this.phone);
                }else{
                    //如果是删除按键则执行默认的操作
                    if(e.keyCode == '8' || e.keyCode == '46'){
                        //删除输入框的数据
                    }else{
                        //对输入的号码进行处理，在号码中间插入空格
                        var phone = this.inputPhone,
                            arr = phone.split(''),
                            len = phone.length;
                        //数目为3的时候的一个处理
                        if(len == 3){
                            arr.splice(3,0,' ');
                        }else if(len == 8){
                            arr.splice(8,0,' ');
                        }else if(len < 3){

                        }else if(len > 3 && len < 8){
                            //检查是否在第4个数字的地方替换了空格
                            if(arr[3] != ' '){
                                arr.splice(3,0,' ');
                            }
                        }else if(len > 8){
                            if(arr[3] != ' '){
                                arr.splice(3,0,' ');
                            }
                            if(arr[8] != ' '){
                                arr.splice(8,0,' ');
                            }
                        }
                        phone = arr.join('');
                        this.inputPhone = phone;
                    }
                }
            }
        }
    };
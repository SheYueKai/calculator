// pages/cal/cal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id_0: '0',
        id_1: '1',
        id_2: '2',
        id_3: '3',
        id_4: '4',
        id_5: '5',
        id_6: '6',
        id_7: '7',
        id_8: '8',
        id_9: '9',
        id_point: '.',
        id_equal: '=',
        id_plus: '+',
        id_minus: '-',
        id_multiply: 'x',
        id_divide: '÷',
        id_negative: 'negative',
        id_clear: 'clear',
        id_back: 'back',
        id_history: 'history',
        screenData: '0',
        lastResult: '0',
        lastOperator: '',
        lastIsOperator: false
    },

    clickButton: function (event) {
        var data = this.data;//页面初始数据
        var id = event.target.id;//当前点击按钮id
        // console.log("id = " + id);

        var result = data.screenData;//当前计算结果
        var lastResult = data.lastResult;//上一个计算结果
        var lastOperator = data.lastOperator;//上一个计算操作符
        var lastIsOperator = data.lastIsOperator;//上一个计算操作符

        if (id == data.id_clear){//清空
            result = 0;
            lastResult = 0;
            lastOperator = '';
            lastIsOperator= false;

        } else if (id == data.id_negative){//正负
            result = -result;

        } else if (id == data.id_plus){//加法
            lastOperator = id;//操作符
            lastIsOperator = true;//最后输入的值是操作符
            lastResult = result;

        } else if (id == data.id_equal) {//等于
            if (lastOperator == data.id_plus){
                result = parseFloat(result) + parseFloat(lastResult);
                lastResult = result;
            }
            lastIsOperator = true;

        } else if (id == 1){//数字
            if ((result == 0) || lastIsOperator){
                result = id;
                lastIsOperator = false;
            }else{
                result += id;
            }
        }

        this.setData({
            lastResult: lastResult,
            lastOperator: lastOperator,
            lastIsOperator: lastIsOperator
        });

        this.setData({//数据更新到视图
            screenData: result
        });

        console.log("result = " + result);
        console.log("lastResult = " + lastResult);
        console.log("lastOperator = " + lastOperator);
        console.log("lastIsOperator = " + lastIsOperator);
    }

})
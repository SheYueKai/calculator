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
        id_all_clear: 'all_clear',
        id_history: 'history',
        screenData: "0"
    },

    clickButton: function (event) {
        var data = this.data;

        var result = this.data.screenData;
        var id = event.target.id;
        // console.log(result);
        // console.log(id);

        switch(id){
            case data.id_clear:
                result = 0;
                break;

            case data.id_plus:
                if(result == 0){
                    break;
                }

            default:
                if (result == 0) {
                    result = id;
                } else {
                    result += id;
                }
        }

        this.setData({
            screenData: result
        })
    }

})
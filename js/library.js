(function($) {
    var punygod = {
        version: "0.0.1"
    };
    puny = punygod;
})($);

(function($) {
    /**
     * 判断参数是否为空
     * @param  {[String]}  value 待验证的参数
     * @return {Boolean}       ture-空，false-不为空
     */
    puny.isEmpty = function(value) {
        text == '' || text == null || text =='null' || text.trim() == ''
        if(typeof(value) == "undefined" || value == null || value == "" || value == "null" || text.trim() == "") {
            return true;
        } else {
            return false;
        }
    }
})($);

(function($) {
    /**
     * 动画效果:向某个方向缩减
     * @param  {[type]} id        [description]
     * @param  {[type]} direction [0：上、1：下、2：左、3：右]
     * @param  {[type]} offset    [description]
     * @return {[type]}           [description]
     */
    puny.anim = function() {
        var id,direction,offset,opacity,height,width ='';
        var left,right,top,bottom = '0px';
        var callback;
        var arr = arguments;
        for (var i = 0; i < arr.length; i++) {
            id = arr[i].id;
            direction = arr[i].direction;
            offset = arr[i].offset;
            opacity = arr[i].opacity;
            height = arr[i].height;
            width = arr[i].width;
            callback = arr[i].callback;
            switch(direction){
                case 0: top = offset+'px';break;
                case 1: bottom = offset+'px';break;
                case 2: left = offset+'px';break;
                case 3: right = offset+'px';break;
            }
            $('#'+id).animate(
                {
                    left:'10%',
                    right:right,
                    top:top,
                    bottom:bottom,
                    opacity:opacity,
                    height:'10%',
                    width:width
                },
                "slow",//speed
                callback//callback
                );
        }
    }
})($);
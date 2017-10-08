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
                    left:left,
                    right:right,
                    top:top,
                    bottom:bottom,
                    opacity:opacity,
                    height:($('#'+id).height()-height)+'px',
                    width:width
                },
                "slow",//speed
                callback//callback
                );
        }
    }
})($);
// 导入新的css文件
(function($){
        puny.extendCss = function(path){
            var filenew=document.createElement("link");
            filenew.rel="stylesheet";
            filenew.type="text/css";
            filenew.href=path;
            filenew.media="screen";
            var headobj=document.getElementsByTagName('head')[0];
            headobj.appendChild(filenew);
}
})($);

//ul分页
(function($){
        puny.initPage = function(obj){
            var url = obj.url;//数据总条数
            var id = obj.id;//列表id
            var type = obj.type;//请求类型
            var dataType = obj.dataType;//返回数据类型
            var data = obj.data;//ajax请求参数


            $.ajax({
                url: url,
                type: (type ? type : 'GET'),
                dataType: (dataType?dataType:'json'),
                data: (data?data:{}),
            })
            .done(function(result) {
                if (result.status || result.status == 'true') {
                    //页面渲染
                    getItem(obj,result);
                }else{
                    $('#'+id).html('数据加载失败');
                }
            })
            .fail(function() {
                $('#'+id).html('数据加载失败');
            })
            .always(function() {

            });
        }
        //加载数据
        function getItem(obj,result){
            var item = showLike(result.rows,obj.item,obj.val);//每条数据如何展示
            // var ival = obj.val;//展示的诗句字段
            var id = obj.id;
            var pageSize = obj.data.pageSize;
            var pageNum = obj.data.pageNum;
            // var item = '';
            //渲染
            // $.each(result.rows, function(index, val) {
            //     //  item += '<li><div class="radio_item">'+
            //     //     '<span onclick="music_choice(this)">'+val.name+'</span><span class="file_item">'+val.filecode+'</span><span>修改</span><span>删除</span>'+
            //     // '</div></li>';
            //     for (var i = 0; i < ival.length; i++) {
            //         item += items[i]+val[ival[i]];
            //         if (i==ival.length-1) {
            //             item += items[i+1];
            //         }
            //     }
            // });
            $('#'+id).html(item);

            var html = '<div class="wellpage" id="wellpage">'+
                                '<span class="wellpage-total">共'+result.total+'条</span>'+
                                '<a href="javascript:;" class="wellpage-pre" id="wellpage-pre" title="上一页">上一页</a>'+
                                '<span class="wellpage-jump">到第'+
                                    '<input type="text" id="wellpage-curr" min="1"  value="'+pageNum+'" class="">页'+
                                    '<input type="button" class="" id="wellpage-jump-to" value="确定" />'+
                                '</span>'+
                                '<a href="javascript:;" class="wellpage-next" id="wellpage-next" title="下一页">下一页</a>'+
                            '</div>';
            $('#'+id).parent().append(html);
            //绑定点击获取数据事件 $('#fax_status_sending').bind("click", {urlParam: 'sendinglist' }, fax_status_sendingOrfail_click);
            param = {
                total:result.total,
                pageNum:pageNum,
                curr:pageNum,
                pageSize:pageSize
            }
            //pre
            $("#wellpage-pre").bind("click",{obj:obj,type:-1},wellJump);//param:param,
            //next
            $("#wellpage-next").bind("click",{obj:obj,type:1},wellJump);
            //jump
            $("#wellpage-jump-to").bind("click",{obj:obj,type:0},wellJump);
        }
        //上一页下一页
        //跳转
        function wellJump(params){
            var obj = params.data.obj;
            // var param = params.data.param;
            var extype = params.data.type;
            var url = obj.url;//数据总条数
            var id = obj.id;//列表id
            var type = obj.type;//请求类型
            var dataType = obj.dataType;//返回数据类型
            var data = obj.data;//ajax请求参数
            //获取page相关参数
            var total = param.total;
            var pageNum = param.pageNum;
            var pageSize = param.pageSize;
            var curr = param.curr;
            var pageMax = Math.ceil(total/pageSize);

            var jumpTo = parseInt($('#wellpage').find('#wellpage-curr').val());
            //下一页
            if (extype == 1) {
                pageNum = curr+1;
                if (pageNum>pageMax) {
                    pageNum = 1
                }
            }
            //上一页
            if (extype == -1) {
                pageNum = curr-1;
                if (pageNum<1) {
                    pageNum = pageMax;
                }
            }
            //跳转
            if (extype == 0) {
                if (jumpTo>0 && jumpTo<=pageMax) {
                    pageNum = jumpTo;
                }
                if (jumpTo<1) {
                    pageNum = 1;
                }
                if (jumpTo>pageMax) {
                    pageNum = pageMax;
                }
            }

            //参数再处理
            data = {
                pageNum:pageNum,
                pageSize:pageSize
            }

             param = {
                total:total,
                pageNum:pageNum,
                curr:curr,
                pageSize:pageSize
            }


            $.ajax({
                url: url,
                type: (type ? type : 'GET'),
                dataType: (dataType?dataType:'json'),
                data: (data?data:{}),
            })
            .done(function(result) {
                if (result.status || result.status == 'true') {
                    param = {
                        total:result.total,
                        pageNum:pageNum,
                        curr:pageNum,
                        pageSize:pageSize
                    }
                    //页面渲染
                    refreshItem(obj,param,result);
                }else{
                    $('#'+id).html('数据加载失败');
                }
            })
            .fail(function() {
                $('#'+id).html('数据加载失败');
            })
            .always(function() {

            });
        }

        //页面渲染
        function refreshItem(obj,param,result){
            var pageNum = param.pageNum;
            var curr = param.curr;
            var id = obj.id;
            var item = showLike(result.rows,obj.item,obj.val);//每条数据如何展示
            //渲染
            // $.each(result.rows, function(index, val) {
            //      item += '<li><div class="radio_item">'+
            //         '<span onclick="music_choice(this)">'+val.name+'</span><span class="file_item">'+val.filecode+'</span><span>修改</span><span>删除</span>'+
            //     '</div></li>';
            // });
            $('#'+id).html(item);

            //更新数据
            $('#wellpage').find('.wellpage-total').html('共'+result.total+'条');
            $('#wellpage').find('#wellpage-curr').val(curr);

            // //pre
            // $("#wellpage-pre").bind("click",{obj:obj,param:param,type:-1},wellJump);
            // //next
            // $("#wellpage-next").bind("click",{obj:obj,param:param,type:1},wellJump);
            // //jump
            // $("#wellpage-jump-to").bind("click",{obj:obj,param:param,type:0},wellJump);
        }

        function showLike(rows,str,ival){
            var arr = str.split('{{wlpage}}');
            // console.log(arr);
            // var ival = obj.val;//展示的诗句字段
            var item = '';
            //渲染
            $.each(rows, function(index, val) {
                //  item += '<li><div class="radio_item">'+
                //     '<span onclick="music_choice(this)">'+val.name+'</span><span class="file_item">'+val.filecode+'</span><span>修改</span><span>删除</span>'+
                // '</div></li>';
                for (var i = 0; i < ival.length; i++) {
                    if (ival[i]=='{{row}}') {
                         // item += arr[i]+toJsonStyle(val);
                         item += arr[i]+encodeURI((JSON.stringify(val)));
                    }else{
                        item += arr[i]+val[ival[i]];
                    }
                    if (i==ival.length-1) {
                        item += arr[i+1];
                    }
                }
            });
            return item;
        }
        function toJsonStyle(val){
            var json = '{';
            for (var j in val) {
               json += "\'"+j+"\'"+":"+"\'"+val[j]+"\'"+",";
            }
            json = json.substring(0, json.length-1)+"}";
            return json;
        }
})($)
var nav = {};

//初始化导航菜单
nav.init = function(obj){
            var type = obj.type;                 //导航菜单的类型：top,bottom,left,right
            var id = obj.id;                        //目标容器id
            var func = obj.func;                //每个菜单项可以动态绑定方法
            var data = obj.data;                //每个方法对应的参数
            var ivals = obj.ivals;                //每个菜单项显示的文本，数组
            var ivalid = obj.ivalid;              //自定义id
            var imags = obj.imags;          //每个菜单项的背景图片与菜单文本理论上只显示其中一个，默认文本显示，数组
            var item = obj.item;                //每个菜单项的显示元素，没有则是默认
            var active = obj.active;           //默认激活的菜单，数字
            var ivalsClass = obj.ivalsClass;            //自定义样式，对象
            var success = obj.success;                  //成功初始化后可执行方法

            //根据type判断，选择不同风格
            var style = 'i';//默认top风格
            if (type == 'vertical') {
                        //竖直风格
                        style = 'v';
            }


            //用于储存每个导航菜单的项的id
            var itemid = [];

            //引入内置css样式文件
            addSheetFile('../js/navmenu/navmenu.css');
            //默认情况

            //主体
            if (item) {
                        console.log(typeof ivals)
            }

            //默认的class
            var dfClass = 'wl-t-'+style;
            ivalsClass.all && (dfClass = ivalsClass.all);
            var dfactive = ivalsClass.active ? ivalsClass.active:'wl-t-'+style+'-active';
            //将菜单显示文本填充
            if((typeof ivals) == 'object' && ivals.length>0){

                        item = '';
                        for (var i = 0; i < ivals.length; i++) {
                                //动态生成id，用于绑定点击事件
                                var tempid = ivalid[i]?ivalid[i]:('wl-t-item-'+(new Date()).getTime()+i);
                                //单个菜单自定义样式
                                var aloneClass = (ivalsClass[i]?ivalsClass[i]:dfClass);
                                console.log(id+"--"+aloneClass)
                                item +=      '<li class="'+aloneClass+' wl-nav-i-user-defined '+((i == active)?dfactive:'')+'" id="'+tempid+'">'+
                                                        //菜单项显示元素,默认
                                                        ivals[i]+
                                                        // '<div class="">'+ ivals[i] + '</div>'+
                                                    '</li>';
                                itemid[i] = tempid;
                        }
            }

            //wl-nav-user-defined 预留自定义样式class,或者直接修改内置样式文件
            //添加到目标元素中
            var navid = 'wl-nav-menu-'+(new Date()).getTime();
            var html =      '<ul class="wl-nav-menu-'+style+' wl-nav-user-defined" id="'+navid+'" style="z-index:19910501">'+ item+
                                    '</ul>';
            itemid.push(navid);
            itemid.push(id);
            //页面渲染
            $('#'+id).html(html);
            //如果写了成功回调，则执行
            if (success) {
                success();
            }

            //菜单单击默认事件
            wlNavDefaultClick(id,itemid,dfactive);

            //动态绑定事件
            wlNavBindEvent(func,data,itemid)
            console.log(itemid);
}

//菜单单击默认事件
function wlNavDefaultClick(id,arr,active){
            for (var i = 0; i < arr.length-2; i++) {
                    $('#'+arr[i]).click(function(event) {
                            var a = $(event.target);
                            a.addClass(active);
                            a.siblings('li').removeClass(active);
                    });
            }
}
//菜单项绑定点击事件
function wlNavBindEvent(func,data,arr){
            for (var i = 0; i < arr.length-2; i++) {
                        var ifunc = func[i];
                        if (ifunc) {
                                    var param = data[i] ? {param:data[i],id:arr[i]} : {id:arr[i]};
                                    $('#'+arr[i]).bind('click', param,ifunc);
                        }
            }
}

//动态导入link：css文件
function addSheetFile(path){
            var filenew=document.createElement("link");
            filenew.rel="stylesheet";
            filenew.type="text/css";
            filenew.href=path;
            filenew.media="screen";
            var headobj=document.getElementsByTagName('head')[0];
            headobj.appendChild(filenew);
}

function testRange(a){
        var a = $(a);
        console.log(a.val())
}
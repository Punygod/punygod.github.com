function vueTest(){
    var random = Math.random();
    app.message = random;
}

var vm = new Vue({
    el:'#test-1',
    data:{
        counter:0
    }
});

var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
});

// 指令
var app2 = new Vue({
    el:'.app-2',
    data:{
        msg:'页面加载于 '+new Date().toLocaleString()
    }
})

//条件
var app3 =new Vue({
    el:'#app-3',
    data:{
        ty:false
    }
})

setInterval(function () {
    var ran = Math.random()*10;
    app3.ty = ran > 5 ? true:false;
},2000);

// v-for
var app4 = new Vue({
    el:'#app-4',
    data:{
        list:[
            {val:'Java'},
            {val:'JavaScript'},
            {val:'Html'},
            {val:'CSS'},
            {val:'Vue'},
            {val:'C#'}
        ]
    }
})

//v-on 绑定事件监听器
var app5 = new Vue({
    el:'#app-5',
    data:{
        msg:'smile the rose this moment!'
    },
    methods:{
        reverseMessage:function () {
            this.msg = this.msg.split('').reverse().join('');
        }
    }
})

// v-model
var app6 = new Vue({
    el:'#app-6',
    data:{
        msg:'Hellod Vue'
    }
})

// 构建组件模板
Vue.component('my-list',{
    // ol-item 组件现在接收一个"param",类似于自定义属性，这个属性名为 todo
    props:['param'],
    template:'<div>{{param.name}}</div>'
});

var app7 = new Vue({
    el:'#app-7',
    data:{
        groceryList:[
            {id:0,name:'苹果'},
            {id:1,name:'橘子'},
            {id:2,name:'雪梨'},
            {id:3,name:'香蕉'},
            {id:4,name:'whatever'}
        ]
    }
})

var app8 = new Vue({
    el:"#app-8",
    data:{
        msg:"你懂我?"
    },
    computed:{
        // 计算属性的getter，计算属性是基于他们的依赖进行缓存
        reversedMessage:function(){
            // this 指向 vm 实例
            return this.msg.split('').reverse().join('');
        }
    }

})



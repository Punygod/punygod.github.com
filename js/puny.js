$(function(){
    // $('#header"').bind('onmousewheel',test);
    /*注册事件*/
    if(document.addEventListener){ document.addEventListener('DOMMouseScroll',showtime,false);}
    window.onmousewheel=document.onmousewheel=showtime;
})

function showtime(e){
    puny.anim({id:'header',direction:2,offset:100,opacity:1,height:'10%',width:'100%',callback:test})
    // $('#header').animate(
    //     {
    //         right:'250px',
    //         opacity:'0.5',
    //         height:'100px',
    //         width:'150px'
    //     },
    //     "slow",//speed
    //     test//callback
    //     );

    // e=e || window.event;
    // if(e.wheelDelta){//IE/Opera/Chrome
    //     if(e.wheelDelta==120){
    //         //向上滚动事件
    //         alert("向上1");
    //     }else{
    //         //向下滚动事件
    //         alert("向下1");
    //     }
    // }else if(e.detail){//Firefox
    //     if(e.detail==-3) {
    //         //向上滚动事件
    //         alert("向上2");
    //     }else{
    //         //向下滚动事件
    //         alert("向下2");
    //      }
    // } //ScrollText(direct);
}

function test(){
    alert('test  Success')
    // $('#header').css('display', 'none');
}

function scrollFunc(e){
    console.log('x')
}
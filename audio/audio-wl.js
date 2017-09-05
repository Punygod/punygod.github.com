// function initAudio(){
//     // initaudio({
//     //     url:'music/nobility.mp3', //音频url
//     //     bodyid:'audio-body',  //容器id
//     //     preid:'audio-wl'  //audio标签id
//     // })
// }

//初始化方法
function initaudio(obj){
    var url = obj.url;
    var bodyid = obj.bodyid;
    var preid = obj.preid;
    var html =  '<div class="audio-wl" style="">'+
                            '<audio id="'+preid+'"  src="'+url+'" style="">duration</audio>'+
                            '<input class="audio-wl-input audio-wl-play" id="'+preid+'-play" type="button" value="" onclick="audioPlay(this,\''+preid+'\');" />'+
                            '<div class="audio-time"><!-- 00:00/00:00 -->'+
                                '<span class="audio-time-panel" id="'+preid+'-curr">00:00</span><span class="audio-time-panel" id="'+preid+'-total">/00:00</span>'+
                            '</div>'+
                            // 时间进度滑块
                            '<div class="audio-slip">'+
                                '<input id="'+preid+'-time" class="audio-wl-slip" type="range" value="0" >'+
                            '</div>'+
                            // 音量静音按钮
                            '<input id="'+preid+'-mute" data-mute=false class="audio-wl-input audio-wl-mute" type="button" name="" onclick="audioToMute(\''+preid+'\');">'+
                            // 音量进度滑块
                            '<div class="audio-slip audio-voice">'+
                                '<input id="'+preid+'-volume" class="audio-wl-slip" type="range" value="50">'+
                            '</div>'+
                        '</div>';
    $('#'+bodyid).html(html);
    $('#'+preid+'-time').setAudioTime({ min: 0,   max: 100,  step: 0.1,  callback: timeChange, id:preid});
    $('#'+preid+'-volume').setAudioTime({ min: 0,   max: 100,  step: 0.1,  callback: volumeChange, id:preid});
}

//播放OR暂停
function audioPlay(a,id){
     // var audio = $('#audio-demo')[0];
     var audio = document.getElementById(id);
     totalTime(audio,id);
     audio.volume = parseFloat($('#'+id+'-volume').val())/100;

     if (audio.paused) {
        audio.play();
        // $(a).css('background-image', 'url(pause.svg)');
        $(a).removeClass('audio-wl-play')
        $(a).addClass('audio-wl-pause')
    }else{
        audio.pause();
        // $(a).css('background-image', 'url(play.svg)');
        $(a).removeClass('audio-wl-pause')
        $(a).addClass('audio-wl-play')
    }
    $('#'+id+'-volume').val(audio.volume*100);
    currTime(id);
}
//填充总时间
function totalTime(audio,id){
    var time = audio.duration;
    var str = formatterTime(time);
    $('#'+id+'-total').text('/'+str);
}
//更新当前时间
function currTime(id){
    var audio = document.getElementById(id);
    if (audio) {
        var time = audio.currentTime;
        var timeTotal = audio.duration;
        var str = formatterTime(time);
        $('#'+id+'-curr').text(str);
        //时间轴同步移动
        var timesval = time/timeTotal*100;
        $('#'+id+'-time').val(timesval);
        if (time>=timeTotal || audio.paused) {
            // $('#'+id+'-time').val(100);
            return;
        }
        setTimeout('currTime(\''+id+'\')', 500);
    }
}
//毫秒转成字符串
function formatterTime(time){
    var s = Math.floor(time%60);
    var m = Math.floor(time/60);
    var formatter = (m>9 ? m:('0'+m))+':'+(s>9?s:('0'+s));
    // console.log(formatter)
    return formatter;
}
//滑块监听事件 .根据滑块位置填充
$.fn.setAudioTime = function(obj){
    this.sliderobj = {
        min: obj && !isNaN(parseFloat(obj.min)) ? Number(obj.min) : null,
        max: obj && !isNaN(parseFloat(obj.max)) ? Number(obj.max) : null,
        step: obj && Number(obj.step) ? obj.step : 1,
        callback: obj && obj.callback ? obj.callback : null,
        id:obj && obj.id ? obj.id:null
    };

    var $input = $(this);
    var min = this.sliderobj.min;
    var max = this.sliderobj.max;
    var step = this.sliderobj.step;
    var callback = this.sliderobj.callback;
    var id = this.sliderobj.id;

    $input.attr('min', min)
        .attr('max', max)
        .attr('step', step);

    $input.bind("input", function(e){
        $input.attr('value', this.value);
        // $input.css( 'background', 'linear-gradient(to right, #059CFA, white ' + this.value + '%, white)' );
        // $input.css( 'background-size', this.value + '% 100%' );

        if ($.isFunction(callback)) {
            callback(this,id);
        }
    });
};
//时间轴监听监听
function timeChange(a,id){
    var a = $(a);
    var audio = document.getElementById(id);
    // console.log(a.val())
    var duration = audio.duration;
    var currtime = a.val()/100*duration;
    audio.currentTime = currtime;
    currTime(id);
}
//音量轴监听
function volumeChange(a,id){
    var a = $(a);
    var audio = document.getElementById(id);
    var volume = audio.volume;
    audio.volume = a.val()/100;
    if (audio.volume == 0) {
        audioToMute(id);
    }else{
        var a =  $('#'+id+'-mute');
         audio.muted = false;
        a.attr('data-mute','false');
        $('#'+id+'-volume').val(volume*100);
        // a.css('background-image', 'url(trumpet.svg)');
        a.addClass('audio-wl-mute');
        a.removeClass('audio-wl-trumpet');
    }
}
//禁音
function audioToMute(id){
    var audio = document.getElementById(id);
    var a =  $('#'+id+'-mute');
    var ismute = a.attr('data-mute');
    var volume = audio.volume;
    if (ismute == 'true') {
        audio.muted = false;
        a.attr('data-mute','false');
        $('#'+id+'-volume').val(volume*100);
        // a.css('background-image', 'url(trumpet.svg)');
        a.addClass('audio-wl-mute');
        a.removeClass('audio-wl-trumpet');
    }else{
        audio.muted = true;
        a.attr('data-mute','true');
        $('#'+id+'-volume').val(0);
        // a.css('background-image', 'url(mute.svg)');
        a.addClass('audio-wl-trumpet');
        a.removeClass('audio-wl-mute');
    }
}

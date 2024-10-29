//Does not require customization
widget.on('processresult', function (s,e){

    function convertRawTime(num){
     
     var sign = num < 0 ? '-' : '';
     var hours = (parseInt( Math.abs(num) / 3600 )%24);
     var minutes = parseInt( Math.abs(num) / 60 )%60;
     var seconds = parseInt( Math.abs(num) % 60);
    
     var hoursText = hours < 10 ? "0" + hours : hours;
     var minutesText = minutes < 10 ? "0" + minutes : minutes;
     var secondsText = seconds < 10 ? "0" + seconds : seconds;
     if (hours==0){
       var secondsText = seconds < 10 ? "0" + seconds : seconds;
       return sign + minutes + ":" + secondsText
     } else {
       var hoursText = hours < 10 ? "0" + hours : hours;
       var minutesText = minutes < 10 ? "0" + minutes : minutes;
       var secondsText = seconds < 10 ? "0" + seconds : seconds;
       return sign + hoursText + ":" + minutesText + ":" + secondsText
    
     }
     };
     
     // update the primary indicator
     e.result.value.text=convertRawTime(e.result.value.data);
     
     // update the secondary indicator, if there is one
     if (e.result.hasOwnProperty('secondary')) {
        e.result.secondary.text=convertRawTime(e.result.secondary.data);
     }
    
    });
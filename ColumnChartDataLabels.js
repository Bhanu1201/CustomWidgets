widget.on('processresult', function(se,ev){
 
 

    /*Change the Series Name below*/

var seriesName = "Total Cost"; 


var data = _.find(ev.result.series, function (ser) {return ser.name == seriesName}).data 
_.each(data, function(value){ 
 

     /*Enable Data Labels, Font Size, Font Weight, Color, Rotation (-360 to 360), and the Y offset*/

value.dataLabels = {enabled:true, style:{'fontSize':'25px', 'fontWeight':'bold', 'color': '#000000'}, rotation: 350, y : 40} 

               })
  

}) 
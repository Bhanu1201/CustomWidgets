var angle = 0 // you can change the angle to whatever you need
widget.on('render', function(se,ev){

  se.queryResult.xAxis.plotBands.forEach(function(band){
    band.label.rotation = angle;
	band.label.style.textOverflow = 'initial';
  })
})


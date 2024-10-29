
widget.on('render', function(sender, se){
	
	// Change series  to a line, enable the marker and hide the line
	sender.queryResult.series[2].type = "line";
        sender.queryResult.series[2].lineWidth = 0;
        sender.queryResult.series[2].marker = {
                enabled: true,
                radius: 6
            };
	
	// In hover state, set lineWidth and line WidthPlus to 0
	sender.queryResult.plotOptions.series.states.hover.lineWidth = 0;
	sender.queryResult.plotOptions.series.states.hover.lineWidthPlus = 0;
	// Change the hover fillColor
	sender.queryResult.plotOptions.series.marker.states.hover.fillColor = 'white';
	
})



// Show the legend color for Series 3  since the lineWidth is set to 0
widget.on('domready', function(se, ev){
	
	// Add the color to the Legend for series 
	var widgetElement = $('widget[widgetid="' + widget.oid + '"]');
        //scope the canvas only when necessary (not in edit mode)
  
	if(widgetElement.length === 0) {
		$('.highcharts-legend-item').first().find('path').first().clone().appendTo($('.highcharts-legend-item:nth-child(3)'));
		$('.highcharts-legend-item:nth-child(3)').find('path').attr('stroke','#f54b4b'); 
	}
	else {  
		$('.highcharts-legend-item', widgetElement).first().find('path').first().clone().appendTo( $('.highcharts-legend-item:nth-child(3)', widgetElement));
		$('.highcharts-legend-item:nth-child(3)', widgetElement).find('path').attr('stroke','#f54b4b');  
	  }
});
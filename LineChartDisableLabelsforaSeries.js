var seriesName = "Goal"; 


widget.on('processresult', function(sender, ev){ 
	
	//This disables the labels for the series based on the seriesName
	var data = _.find(ev.result.series, function (ser) {return ser.name == seriesName}).data 
	_.each(data, function(value){ 
		value.dataLabels = {enabled: false} 
	})

})

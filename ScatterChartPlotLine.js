widget.on('processresult', function(se,ev){

	var xAxis = ev.result.xAxis,
		yAxis = ev.result.yAxis[0]
		
	
	xAxis.plotLines= [{color: '#FF6666',width: 2,value: 10000,dashStyle:'Dash'}]
	yAxis.plotLines= [{color: '#FF6666',width: 2,value: 20,dashStyle:'Dash'}]
})
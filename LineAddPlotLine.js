widget.on("processresult", function (widget, args){
	args.result.xAxis.plotLines = [{
            color: '#E0E0E0',
            width: 5,
            value: 0}];
	args.result.yAxis[0].plotLines = [{
            color: '#E0E0E0',
            width: 5,
            value: 0}];
});
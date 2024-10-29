widget.on("processresult",function(w,args){
	for (i=0;i<args.result.series.length;i++) {
		args.result.series[i].data.reverse();
	};
	args.result.xAxis.categories.reverse();
})
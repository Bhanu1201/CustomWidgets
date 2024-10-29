widget.on("processresult",function(w,args){

	var originalSeries = args.result.series;
	var dict = {};
	var counter = 0;
	
	function getSum(total, num) {
		return total + num;
	}
	
	originalSeries.forEach(
		function(i){
			var mySeries = [];
			i.data.forEach(function(datapoint){mySeries.push(datapoint["y"])});
			var total = mySeries.reduce(getSum);
			dict[counter] = total;
			counter++;
		})

	var items = Object.keys(dict).map(function(key) {
		return [key, dict[key]];
	});

	var OrderArray = items.sort(function(first, second) {
		return second[1] - first[1];
	});

	var newSeries = [];

	for (var i = 0; i < originalSeries.length; i++){
		var SeriesIndex = parseInt(OrderArray[i][0]);
		newSeries.push(originalSeries[SeriesIndex]);
	};
	
	counter = 0;
	newSeries.forEach(function(item){
		if (counter.toString().length == 1) {
            counter = "0" + counter;
        }
		item["sortData"] = counter.toString() +  item["sortData"]; 
		counter++;
});
	
	args.result.series = newSeries;

});
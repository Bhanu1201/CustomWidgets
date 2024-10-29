var categories= ['Germany','India','Japan','France','China','Brazil','Australia','United States','United Kingdom'];
 
// ---------- DO NOT EDIT BELOW THIS LINE ----------
 
var findIndex = function(val, list) {
    if (list=='categories') { 
		return categories.indexOf(val)
	}
};

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}

widget.on('processresult',function(se,ev){

	var sortedArray;
	
	ev.result.series.forEach( function(bb) {
		// create new array with the ordered categories
		var dataSetLength = bb.data.length;

		var newSortedArray=new Array(dataSetLength);	
		//Two dimensional array to sort the categories based on the list above
		var order=new Array(dataSetLength);
		for (var i=0; i < dataSetLength; i++) {
			order[i]=new Array(2);
		}
		var blankcat;
		var i = 0;

		bb.data.forEach( function(cat) {
			if (typeof cat.selectionData !== 'undefined'){
				order[i][0]=findIndex(cat.selectionData[0].trim(), 'categories');
				order[i][1]=cat;
				i++;
			}
			else {
				blankcat=cat;	
			}
		})
		order.sort(sortFunction);

		for (i=0; i<order.length; i++) {
			newSortedArray[i] = order[i][1];
		}

		bb.data=newSortedArray;
		sortedArray = newSortedArray;
	});

	var newCategoryList = [];
	for (i=0; i<sortedArray.length; i++) {
		newCategoryList[i] = sortedArray[i].selectionData[0].trim();
	}
	ev.result.xAxis.categories=newCategoryList;
	
});
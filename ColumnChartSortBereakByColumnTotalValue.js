
var categories= ["value desc"]; //Manual order\"value asc"\"Value desc"
var breakBy = [ ];
 
// ---------- DO NOT EDIT BELOW THIS LINE ----------
 
var findIndex = function(val, list) {
	if (list=='breakby') { 
		return breakBy.indexOf(val) 
	} else if (list=='categories') { 
		return categories.indexOf(val)
	}
};

widget.on('processresult',function(se,ev){
	
	//If categories array contains "value asc" or "value desc", sort categories by their total values. 
	//The sorted categories will be placed in the category array used by the manual sorting script
	
	if (categories.length>0&&categories[0] === "value desc"){
		categories = sortColumnsByValue(ev,"desc");
		}
	else if (categories.length>0&&categories[0] === "value asc"){
		categories = sortColumnsByValue(ev,"asc");
	};
	
	//determine if we should sort categories or breakbys
	categoryStatus=false;
	breakStatus=false;
	
	for (p=0; p<ev.widget.metadata.panels.length; p++){
		if (ev.widget.metadata.panels[p].name=="categories" && ev.widget.metadata.panels[p].items.length>0 && categories.length>0){
			categoryStatus=true;
		}
		else if (ev.widget.metadata.panels[p].name=="break by" && ev.widget.metadata.panels[p].items.length>0 && breakBy.length>0){
			breakStatus=true;
		}
	};
	
	if (categoryStatus){
		ev.result.series.forEach( function(bb) {
			newData= new Array(categories.length);
			var blankcat;
			bb.data.forEach( function(cat) {
				if (typeof cat.selectionData !== 'undefined'){
					newData[findIndex(cat.selectionData[0].trim(), 'categories')]=cat;
				}
				else{
					blankcat=cat;	
				}
			})
			for (i=0; i<newData.length; i++) {
				if (typeof newData[i] === 'undefined') {
					newData[i]=blankcat;	
				}
			}
			bb.data=newData;
		});
		ev.result.xAxis.categories=categories;
	};
	
	if (breakStatus) {
		ev.result.series.sort(function(a,b){
			if (findIndex(a.name, 'breakby') < findIndex(b.name,'breakby')) {
				return -1
			} else if (findIndex(a.name,'breakby') > findIndex(b.name,'breakby')) {
				return 1
			}
			return 0;
		});
	};
});



//Sort categories by total value: functions

//Sort ascending \ descending
 function sortCatsByValueAsc(a,b){
	var aValue = a.value;
	var bValue = b.value;
	return ((aValue < bValue) ? -1 : ((aValue > bValue) ? 1 : 0));
	}

function sortCatsByValueDesc(a,b){
	var aValue = a.value;
	var bValue = b.value;
	return ((aValue < bValue) ? 1 : ((aValue > bValue) ? -1 : 0));
	}

//replace "category" object with the category name
function sortedCatsNames(arr){
		for (var i=0 ; i<arr.length ; i++){
			arr[i] = arr[i].name;
		}
	}

//Main function	
function sortColumnsByValue (arg, sorting){
	//Create an array to contain all categories' original index, name and value
	var cats = [];

	for (var c=0 ; c<arg.result.xAxis.categories.length ; c++){
		cats.push({index:c ,name: arg.result.xAxis.categories[c],value:0});
	}

	for (var i=0; i<arg.result.series.length; i++){
		for (var j=0 ; j<arg.result.series[i].data.length;j++){
			cats[j].value+=arg.result.series[i].data[j].y;
			
		}
	}
	//Sort Array by category value
	var sortCats;
	if (sorting==="desc"){
		sortCats = cats.sort(sortCatsByValueDesc);
		}
	else {
		sortCats = cats.sort(sortCatsByValueAsc);
		}
	
	//Replace objects with the category name
	sortedCatsNames(sortCats);
	return sortCats;
}
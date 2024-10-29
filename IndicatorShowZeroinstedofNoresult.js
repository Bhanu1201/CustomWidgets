/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

widget.on('ready', function (w, e) {
	e.widget.$noResults = false;
})


widget.on('queryend', function (w, args) {
	
	if(!args.rawResult.values){
		args.rawResult.values = [{data:0,text:"0"}]
		}
	else {
	args.rawResult.values.forEach(function(element) { if(isNaN(element.data)) {element.data = 0; element.text = "0";}});
	}
})
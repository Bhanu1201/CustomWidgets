widget['__first_load__'] = true;

widget.on("beforeviewloaded", function (w, args){

	var map = args.options.map;
	
	window['map_'+w.oid] = map;
});

widget.on("domready", function (w, args){


	if (widget['__first_load__'] ){ 
	
	setTimeout(function () { window['map_'+w.oid].setView([50, 15], 4);}, 1000); 
	} 
	widget['__first_load__']  = false;

}		 );
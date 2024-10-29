widget.on("beforeviewloaded", function (widget, args){

    var map = args.options.map;
     
     map.scrollWheelZoom.disable();
     
    });
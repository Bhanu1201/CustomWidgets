var m = widget.metadata.panel(0).$$manifest.metadata;
var n = widget.manifest.data.panels[0].metadata;
n.items = m.items = [ "dimensions", "measures" ];
n.mixed = m.mixed = true;
widget.on("beforequery", function(w, e) {	
	delete e.query.ungroup;
});
widget.on('processresult', function(widget, args) {

    var series=args.result.series[1];
        
        series.lineWidth = 0.001;
        series.states = {
            hover: {
                enabled: false
            }
        };
        
        $.each(series.data, function(idx, el) {
            el.marker.enabled = true;
        });
    });
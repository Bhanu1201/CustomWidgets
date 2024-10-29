widget.on('processresult', function (sender, ev) {
    _.each(ev.result.series, function (series, i) {
        _.each(series.data, function (value) {
            // Enable dataLabels, change its font, make it bold and rotate by 0
            value.dataLabels = { enabled: true, style: { 'fontSize': '30px', 'fontWeight': 'bold' }, rotation: 0 };
        });
    });
});

widget.on('render', function(sender, se){
 
    var s = sender.queryResult.series[1];
     
     
    // Define a custom symbol path
    Highcharts.SVGRenderer.prototype.symbols.rect = function (x, y, w, h) {
    return [
    'M', x, y+h/2,
    'L', x+w, y+h/2,
    'z'];
    };
    
    if (Highcharts.VMLRenderer) {
    Highcharts.VMLRenderer.prototype.symbols.rect = Highcharts.SVGRenderer.prototype.symbols.rect;
    }
    
    // Change series to a line, enable the marker and hide the line
    s.type = "line";
    s.lineWidth = 0.01;
    s.marker = {
    symbol: 'rect',
    lineColor: null,
    radius: 8,
    lineWidth: 2
    };
    
     
    // When hovered state to disabled and lineWidth to 0
    sender.queryResult.plotOptions.series.states.hover.lineWidth = 0;
    sender.queryResult.plotOptions.series.states.hover.lineWidthPlus = 0;
    // Change the hover fillColor
    sender.queryResult.plotOptions.series.marker.states.hover.fillColor = 'white';
     
    })
    
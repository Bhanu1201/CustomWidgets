widget.on('render', function(widget,event){

    // Define how each value series is used
     var displaySeriesIndex = 0,
     labelSeriesIndex = 1;
    
    // Define where to put the center line
     var centerLineValue = 0;
     
     // Get a reference to the highcharts object
     var chart = widget.queryResult;
    
    // Define a centerline to add to the chart
     var plotline = {
     color: 'black',
     dashStyle: 'solid',
     width: 2,
     value: centerLineValue
     }
    
    // Add the center line to the series
     chart.yAxis[0].plotLines = [plotline];
    
    // Get a reference to the series
     var displaySeries = chart.series[displaySeriesIndex],
     labelSeries = chart.series[labelSeriesIndex];
    
    // Loop through each data point in then display series
     displaySeries.data.forEach(function(data, index){
    
    // Save a reference to the label value
     data.labelValue = labelSeries.data[index].y;
     })
    
    // Remove the label series
     chart.series.splice(labelSeriesIndex,1);
    
    // Get a reference to the sisense formatter
     var numberFormatter = prism.$injector.get('$filter')('numeric');
    
    // Get a reference to the formatting mask of the label's series
     var mask = $$get(widget.metadata.panel('values').items[labelSeriesIndex], 'format.mask', {});
    
    // Override the label formatter function
     chart.plotOptions.series.dataLabels.formatter = function(){
    
    // Use the formatting of the label series, in order to create the value label
     var newLabel = numberFormatter(this.point.options.labelValue, mask);
     return newLabel;
     }
    })
widget.on('processresult', function(e, args) {
 
    //Options
    var lineColor = 'grey';
    var lineTitle = 'Grand Total';
    var lineType = 'spline';
    var showLabels = true;
    
    
    var sTotals = {};
    var sTotalsArr = [];
    var chartS = args.result.series;
    
    //Calculate the Grand Totals
    for(var s = 0; s < chartS.length; s++ ) {
    for(var d = 0; d < chartS[s].data.length; d++) {
    try {
    var cat = '' + chartS[s].data[d].selectionData[0];
    
    
    // Add to the tally
    if(sTotals[cat]) {
    sTotals[cat] = sTotals[cat] + chartS[s].data[d].y;
    }
    else {
    sTotals[cat] = chartS[s].data[d].y;
    } 
    
    // Create unique list of categories 
    //For date dims the XAxis categories are formatted versions of the dates
    if(_.indexOf(sTotalsArr, cat) == -1) {
    sTotalsArr.push(cat); 
    }
    }
    catch(e){}
    }
    }
    
   
    
    //sort the list
    sTotalsArr = _.sortBy( sTotalsArr, function(v) {
    
    //check to see if it is a date
    var dv = Date.parse(v);
    
    if(isNaN(dv)) {
    return v;
    }
    else {
    return dv;
    }
    });
    
   
    
    
    //create another series for the grand total
    var totalSeries = $$.object.clone(args.result.series[0], true);
    
    //create the data object for the series, because all sub groups may not be present each category on X Axis
    var seriesData = $$.object.clone(args.result.series[0].data[0], true);
    
    totalSeries.type = lineType;
    totalSeries.marker = { "enabled" : true };
    totalSeries.color = lineColor;
    totalSeries.name = lineTitle;
    totalSeries.data = [];
    totalSeries.dataLabels = {"enabled" : showLabels };
    
    var maxCum = 0.0;
    
    //Get the XAxis Labels
    var xCat = args.result.xAxis.categories;
    
    for(var d = 0; d < xCat.length; d++) {
    try {
    
    var catSelect = sTotalsArr[d]; 
    var sd = $$.object.clone(args.result.series[0].data[0], true);
    totalSeries.data.push(sd) ; 
    
    totalSeries.data[d].y = sTotals[catSelect];
    maxCum = Math.max(sTotals[catSelect], maxCum);
    }
    catch(e) {}
    }
    
    args.result.series.push(totalSeries);
    
   
    //adjusting the max of the Y Axis
    args.result.yAxis[0].max = maxCum;
    
   
   
   });
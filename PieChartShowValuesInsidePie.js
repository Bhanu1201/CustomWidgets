/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on('ready', function(w) {

    // Get the data objects
    var rawData = w.rawQueryResult.values;
    var data = w.queryResult.series[0].data;
    
    // Find the formatted data values
    var labelElements = $('g.highcharts-data-labels',element).children();
    //debugger;
    // Loop through each value label and save the text
    var cate
    var labelValues = [];
    $.each(labelElements, function() {
    // Get the current value label
    var newValue = $('tspan',this).last(); 
    // Save the value
    labelValues.push( newValue.text() );
    // alert(newValue.text());
    // Remove the outside value label
    newValue.remove();
    }); 
    
    // Find the inside value label
    var labels = $('text.pie-percent-label',element);
    
    // Pass the formatted labels to the front end
    for (i=0; i< data.length; i++) {
    //debugger;
    // Grab the matching value label
    var myLabel = labelValues[i+data.length]; 
    // Update the inside label 
    $(labels[i]).text(myLabel);
    // Adjust the font size for the inside label
    var fontSize = parseInt($(labels[i]).css('font-size'));
    $(labels[i]).css('font-size',fontSize);
    // Adjust the location for the inside label
    var y = parseInt($(labels[i]).attr('y')) -10;
    $(labels[i]).attr('y',y);
    }
    
    })
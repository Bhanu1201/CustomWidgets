widget.on('processresult', function(w, e) {

    var options = {
   
    secondaryValue: {
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 'bold',
    color: 'grey',
    fontSizes: {
    big: 20,
    medium: 15
    }
    }
    };
   
    
    if(e.result.secondary.data >= 0) {
    
    e.result.secondary.text = '▲' + e.result.secondary.text;
    options.secondaryValue.color = '#00FF00';
    
    
    }
    else {
    e.result.secondary.text = '▼' + e.result.secondary.text;
    options.secondaryValue.color = '#FF0000';
    }
    
    w.indicatorInstance.setOptions('numericSimple', options);
   
   });
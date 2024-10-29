widget.on('beforeviewloaded', function(se, ev){


    var legendAlign = 'left',
         verticalAlign= 'top',
        layout =  'horizontal',
        x = 0,
        y = 0
    
    /************************************/

var legend = ev.options.legend;
    legend.align =   legendAlign
    legend.verticalAlign= verticalAlign
    legend.layout= layout
    legend.x=x
    legend.y=y
    
}) 
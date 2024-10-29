widget.on('beforeviewloaded', function(widget, args){

    var newmaxCharactersPerLabel = 25; //Set length of the line length
    args.options.xAxis.labels.maxCharactersPerLabel = newmaxCharactersPerLabel;
    args.options.xAxis.labels.y = 50; //Moves title up and down 
    // args.options.xAxis.labels.x = -50; // Moves titles left and right 
    args.options.xAxis.labels.useHTML = true;
    args.options.xAxis.labels.rotation = 75; //Label Rotation
    args.options.xAxis.labels.formatter = function(){
    return this.value.replace(' ','<br/>')
    }
    })
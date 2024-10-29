
widget.on('beforequery', function(w,args){
    w.style.dataLimits.categoriesCapacityX = 500;// Or any other number
    w.style.dataLimits.categoriesCapacityY = 500; // Or any other number
    w.style.dataLimits.seriesCapacity = 500; // Or any other number
});
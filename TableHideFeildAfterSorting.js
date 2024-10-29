/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

let colIndex = 0;

widget.on("render", function(se,ev){
 se.style.tableState.columns[colIndex].visible = false;
 
})


widget.on('domready',function(){
 	$('.tw-sort-head ', element).css('display', 'none');
})
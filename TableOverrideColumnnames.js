/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

var fields = [{colNum:1, name:"Brand ID"}, {colNum:5, name:"Renamed Brand ID"}];


widget.on ('domready',function(w){
 var widgetId=w.oid;
 var dashselector = 'widget[widgetid="'+widgetId+'"]';
 var widSelector = '.prism-widget-preview'



 for (var i=0 ; i<fields.length ; i++){
  var fieldToRenameIndex=fields[i].colNum;
  var newName=fields[i].name;

  $(dashselector+' th:nth-child('+fieldToRenameIndex+'), '+widSelector+' th:nth-child('+fieldToRenameIndex+')').first().text(newName);

 }
})
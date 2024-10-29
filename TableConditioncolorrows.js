/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/

var columnNumber=1;

widget.on('domready',function(){
	var valueToFind = 'Cell Phones';
	
	var containingRow = $('td:nth-child('+columnNumber+')',element).filter(function(){
		return $(this).text().toUpperCase().trim()==valueToFind.toUpperCase().trim();
		}).closest('tr');
	
	//Change background color on the row level
	containingRow.css({'background-color':'#006699'})
	
	//change text color on the cells level (doesn't work on the entire row level)
	containingRow.find('td').css({'color':'white'})
})
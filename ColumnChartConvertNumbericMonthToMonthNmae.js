const month_desc = {
	1: 'January',
	2: 'February',
	3: 'March',
	4: 'April',
	5: 'May',
	6: 'June',
	7: 'July',
	8: 'August',
	9: 'September',
	10: 'October',
	11: 'November',
	12: 'December'
};

widget.on('processresult',function(se,ev){
	
	//debugger;
	var months = ev.result.xAxis.categories;
	months.forEach((month, index) => {
		
		if(month_desc[month] !== undefined){
			
		months[index] = month_desc[month];	
		} else {
			console.log('error');
		}
	})
});
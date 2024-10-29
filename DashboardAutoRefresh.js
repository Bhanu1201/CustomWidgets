dashboard.on('initialized', function(dashboard, ev){
	
	//Set below variable to change refresh interval (Mili Seconds)
    var refreshIntervalMiliSec = 10000;
	
    var refreshDashboard = function(){
        dashboard.refresh();
		setTimeout(refreshDashboard, refreshIntervalMiliSec);
    }
    setTimeout(refreshDashboard, refreshIntervalMiliSec);
})
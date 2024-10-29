/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


dashboard.on('refreshend', function(d, args) {

    $('.toolbar-dashboard-datasource__date').css('display','none','important');
    //debugger;
    })
    
    dashboard.on('refreshstart', function(d, args) {
    
    $('.toolbar-dashboard-datasource__date').css('display','none','important');
    //debugger;
    })
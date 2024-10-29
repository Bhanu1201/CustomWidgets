/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at https://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on('domready',(w) => {
    //Remove Table Widget Row Number and Page Number values
    document.getElementById('grid_paginate').remove();
    document.getElementById('grid_info').remove();
    
    });
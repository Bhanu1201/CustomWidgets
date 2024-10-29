/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on('ready', function(se, ev){

    //Change header offsets from "margin" to "padding" (fix for sisense v7.0+)
               if (prism.version.split('.')[0] >= 7) {
                   var leftHeaderOffset =   $('widget-header' ,element.parent()).css('margin-left');
                   var rightHeaderOffset =   $('widget-header' ,element.parent()).css('margin-right');
   
                     $('widget-header' ,element.parent()).css('margin-left', 0);
                     $('widget-header' ,element.parent()).css('margin-right', 0);
   
                     $('widget-header' ,element.parent()).css('padding-left', leftHeaderOffset);
                     $('widget-header' ,element.parent()).css('padding-right', rightHeaderOffset);
               }
   
                   //Format Widget Title
                   $('widget-header' ,element.parent()).css({'background-color':'orange','font-size':'15px','font-weight':'bold','padding-left':'10px'}); //changes the widget's title background
       
       
       $('widget-header' ,element.parent()).closest("widget-header").css("height", "auto");
           $('widget-title', element).css("line-height","normal");
             $('.transput-caption', element).css("line-height","normal");
       
   
   })
   
   
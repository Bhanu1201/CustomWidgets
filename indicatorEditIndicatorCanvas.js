/*
Welcome to your Widget's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


widget.on('ready', function(se,ev){
    //Check if new Canvas already exists
   if (document.getElementById("DownArrow")  && se.resizing === false && se.refreshing === false)
       {
      return;
        }
   else {
    //Create New Canvas Element
     try {
    document.getElementById("DownArrow").remove();
    var c = document.getElementsByClassName("indicator-container");
    var newCanvas = document.createElement('canvas');
    newCanvas.id = "DownArrow";

     //Add new Canvas element to Indicator-container
    c[0].appendChild(newCanvas);
    var downArrow = document.getElementById("DownArrow");
    var ctx = downArrow.getContext("2d")
    newCanvas.width = (newCanvas.parentElement.offsetWidth- newCanvas.parentElement.firstElementChild.width)-30;
    newCanvas.height = newCanvas.parentElement.firstElementChild.height;


    //Draw Down Arrow

    //get width and height of canvas
    var width = downArrow.width;
    var height = downArrow.height;
    var Ax = width-50;
    var Ay = height-30;
    var Bx = width-30;
    var By = height-30;

    //Find third point of Triangle
    var AB = Bx - Ax;
    var x = ((AB*AB - AB*AB + AB*AB) / (2*AB));
    var y = Math.sqrt(AB*AB - x*x);
       
    //Draw Lines
    ctx.beginPath();
    ctx.moveTo(Ax,Ay);
    ctx.lineTo(Bx-x,height-y);
    ctx.lineTo(Bx,By);
    ctx.stroke();
         
     }
       
     catch(e)
     {
    var c = document.getElementsByClassName("indicator-container");
    var newCanvas = document.createElement('canvas');
    newCanvas.id = "DownArrow";

     //Add new Canvas element to Indicator-container
    c[0].appendChild(newCanvas);
    var downArrow = document.getElementById("DownArrow");
    var ctx = downArrow.getContext("2d")
    newCanvas.width = newCanvas.parentElement.offsetWidth- newCanvas.parentElement.firstElementChild.width;
    newCanvas.height = newCanvas.parentElement.firstElementChild.height;


    //Draw Down Arrow

    //get width and height of canvas
    var width = downArrow.width;
    var height = downArrow.height;
    var Ax = width-50;
    var Ay = height-30;
    var Bx = width-30;
    var By = height-30;

    //Find third point of Triangle
    var AB = Bx - Ax;
    var x = ((AB*AB - AB*AB + AB*AB) / (2*AB));
    var y = Math.sqrt(AB*AB - x*x);
       
    //Draw Lines
    ctx.beginPath();
    ctx.moveTo(Ax,Ay);
    ctx.lineTo(Bx-x,height-y);
    ctx.lineTo(Bx,By);
    ctx.stroke();
       
        }
   }
    

})



widget.on('readjust', function(e,v)
      {

 
    //Create New Canvas Element
     try {
    document.getElementById("DownArrow").remove();
    var c = document.getElementsByClassName("indicator-container");
    var newCanvas = document.createElement('canvas');
    newCanvas.id = "DownArrow";

     //Add new Canvas element to Indicator-container
    c[0].appendChild(newCanvas);
    var downArrow = document.getElementById("DownArrow");
    var ctx = downArrow.getContext("2d")
    newCanvas.width = newCanvas.parentElement.offsetWidth- newCanvas.parentElement.firstElementChild.width;
    newCanvas.height = newCanvas.parentElement.firstElementChild.height;


    //Draw Down Arrow

    //get width and height of canvas
    var width = downArrow.width;
    var height = downArrow.height;
    var Ax = width-50;
    var Ay = height-30;
    var Bx = width-30;
    var By = height-30;

    //Find third point of Triangle
    var AB = Bx - Ax;
    var x = ((AB*AB - AB*AB + AB*AB) / (2*AB));
    var y = Math.sqrt(AB*AB - x*x);
       
    //Draw Lines
    ctx.beginPath();
    ctx.moveTo(Ax,Ay);
    ctx.lineTo(Bx-x,height-y);
    ctx.lineTo(Bx,By);
    ctx.stroke();
         
     }
       
     catch(e)
     {
    var c = document.getElementsByClassName("indicator-container");
    var newCanvas = document.createElement('canvas');
    newCanvas.id = "DownArrow";

     //Add new Canvas element to Indicator-container
    c[0].appendChild(newCanvas);
    var downArrow = document.getElementById("DownArrow");
    var ctx = downArrow.getContext("2d")
    newCanvas.width = newCanvas.parentElement.offsetWidth- newCanvas.parentElement.firstElementChild.width;
    newCanvas.height = newCanvas.parentElement.firstElementChild.height;


    //Draw Down Arrow

    //get width and height of canvas
    var width = downArrow.width;
    var height = downArrow.height;
    var Ax = width-50;
    var Ay = height-30;
    var Bx = width-30;
    var By = height-30;

    //Find third point of Triangle
    var AB = Bx - Ax;
    var x = ((AB*AB - AB*AB + AB*AB) / (2*AB));
    var y = Math.sqrt(AB*AB - x*x);
       
    //Draw Lines
    ctx.beginPath();
    ctx.moveTo(Ax,Ay);
    ctx.lineTo(Bx-x,height-y);
    ctx.lineTo(Bx,By);
    ctx.stroke();
       
        }
   




})

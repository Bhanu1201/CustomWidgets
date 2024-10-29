/*
Welcome to your Dashboard's Script.

To learn how you can access the Widget and Dashboard objects, see the online documentation at http://developer.sisense.com/pages/viewpage.action?pageId=557127
*/


//Variables + Settings to check elasticube build on the server

//Currently configured to check the build status of the cube every 15 seconds

var serverURL = 'SERVER URL';

var elasticubeName = 'ELASTICUBE NAMEt';

var seconds = 15;

var revision = null;

var settings = {

   "async": true,

    "crossDomain": true,

   "url": serverURL + "/api/v1/elasticubes/localhost/" + elasticubeName + "/revision",

   "method": "GET",

   "headers": {

     "content-type": "application/x-www-form-urlencoded"

   }

}

 

//looks up the revision history of the build, and if the revision changes, than that

//means a build occurred and a auto-refresh occurs

function checkElasticubeBuildStatus(){

   $.ajax(settings).done(function (response) {

       if(revision === null) {

           revision = response;

       }

       else if(revision != response) {

           location.reload();

       }

       setTimeout(checkElasticubeBuildStatus, seconds*1000);

   });

}

 

//Recursive function to keep checking build status

checkElasticubeBuildStatus();
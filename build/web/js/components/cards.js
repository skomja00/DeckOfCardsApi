/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function publicApi (params) {

    domObject = {};
    
    var content = "<div id='listHere'></div>";
    var contentId = params.contentId || 'content';
    var publicApiUrl = params.publicApiUrl || 'https://emptyPublicUrl';
    document.getElementById(contentId).innerHTML = content;
    
    ajax(publicApiUrl, processData, 'listHere') ;
    
        /*
         * private funtion 
         */
        function processData(jsonData) {
            // print out JS object/array that was converted from JSON data by ajax function
            document.getElementById(contentId).innerHTML = jsonData;
        }
} 


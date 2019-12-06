/***********************************
* PAUSE SCREEN
*/
/*
var idleSeconds = 5;

$(function(){
  var idleTimer;
  function resetTimer(){
    clearTimeout(idleTimer);
    idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
  }
  $(document.body).bind('mousemove keydown click',resetTimer); //space separated events list that we want to monitor
  resetTimer(); // Start the timer when the page loads
});

function whenUserIdle(){
  alert('Hello');
}
*/


/***********************************
 * STEP 1
*/

//Click Function
document.querySelector('.btn-step1').addEventListener('click', addElement, );

function addElement () {
    
    // create a new div element 
    var newDiv = document.createElement("div"); 
    // and give it some content 
    var newContent = document.createTextNode("Vælg Kabine"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
  
    // add the newly created element and its content into the DOM 
    var currentDiv = document.getElementById("videoLink"); 
    document.body.insertBefore(newDiv, currentDiv); 
  }


/***********************************
 * HELP BUTTON
 *
 * TO DO: Add video to a BOX you can close with button press or hide video after done playing
 */

//Click Function
document.querySelector('.btn-help').addEventListener('click', btn, );

//Hide video on pageload
var hidevideo = hideVideo()

function hideVideo() {
    document.querySelector('#youtube').style.display = 'none';

}


function btn() {

    document.querySelector('#youtube').style.display = 'block';
   //Open a pop-up with a video or explanation - Not working as intended
 
}
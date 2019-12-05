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
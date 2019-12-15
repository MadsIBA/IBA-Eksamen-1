attachEvent(window,'load',function(){
    var idleSeconds = 300;
    var idleTimer;
    function resetTimer(){
      clearTimeout(idleTimer);
      idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
    }
    attachEvent(document.body,'mousemove',resetTimer);
    attachEvent(document.body,'keydown',resetTimer);
    attachEvent(document.body,'click',resetTimer);
  
    resetTimer(); // Start the timer when the page loads
  });

  function whenUserIdle(){
    window.location.href = "start.html";
    }
  
  function attachEvent(obj,evt,fnc,useCapture){
    if (obj.addEventListener){
      obj.addEventListener(evt,fnc,!!useCapture);
      return true;
    } else if (obj.attachEvent){
      return obj.attachEvent("on"+evt,fnc);
    }
  } 

// STEPS ANIMATION (NOT COMPLETE)
$('.accordion-panel:eq(0)')
.fadeIn(0);
$('.accordion-panel:eq(0)')
.fadeOut(500); 
$('.accordion-panel:eq(0)')
.fadeIn(); 
$('.grid-container:eq(0)').hide().fadeIn(3000);
/*$
$('.accordion').on('click', '.accordion-control', function (e) { // When clicked
    e.preventDefault(); // Prevent default action of button
    $(this) // Get the element the user clicked on
        .next('.accordion-panel') // Select following panel 
        .not(':animated') // If it is not currently animating
        .slideToggle(); // Use slide toggle to show or hide it
});*/

// #kabineTid (COMPLETE)
$('.menu').on('click','#kabineTid, #orderNo', function(){                     
    $('.accordion-panel:eq(0)')         // Get Step 1
    .delay(500);                        // Delay Animation
    $('.accordion-panel:eq(0)')         // Get Step 1
    .not(':animated')                   // If it is not currently animating                                   
    .fadeIn(1000);                          

    $('.accordion-panel:eq(1)')         // Get Step 2
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          
        
    $('.accordion-panel:eq(2)')         // Get Step 3
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                       

    $('.accordion-panel:eq(3)')         // Get Step 4
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                         
});

// #vare KNAP (COMPLETE)
$('.menu').on('click', '#vare', function(){                     
    $('.accordion-panel:eq(0)')         // Get Step 1
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          

    $('.accordion-panel:eq(1)')         // Get Step 2
    .delay(500);                        // Delay Animation
    $('.accordion-panel:eq(1)')         // Get Step 2
    .not(':animated')                   // If it is not currently animating                                   
    .fadeIn(1000);                          

    $('.accordion-panel:eq(2)')         // Get Step 3
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          
    
    $('.accordion-panel:eq(3)')         // Get Step 4
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                        
});

// #confirmOrder (COMPLETE)
$('.menu').on('click', '#confirmOrder', function(){                     
    $('.accordion-panel:eq(0)')         // Get Step 1
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          

    $('.accordion-panel:eq(1)')         // Get Step 2
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          

    $('.accordion-panel:eq(2)')         // Get Step 3
    .delay(500);                        // Delay Animation
    $('.accordion-panel:eq(2)')         // Get Step 3
    .not(':animated')                   // If it is not currently animating                                   
    .fadeIn(1000);                       

    $('.accordion-panel:eq(3)')         // Get Step 4
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                         
});

// #confirmOrder2 (COMPLETE)
$('.menu').on('click', '#confirmOrder2', function(){                     
    $('.accordion-panel:eq(0)')         // Get Step 1
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          

    $('.accordion-panel:eq(1)')         // Get Step 2
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                          
    
    $('.accordion-panel:eq(2)')         // Get Step 3
    .delay(500);                        // Delay Animation
    $('.accordion-panel:eq(2)')         // Get Step 3
    .not(':animated')                   // If it is not currently animating                                   
    .fadeIn(1000);                       

    $('.accordion-panel:eq(3)')         // Get Step 4
    .not(':animated')                   // If it is not currently animating                                   
    .fadeOut();                         
});

// #payment (COMPLETE)
$('.menu').on('click', '#orderYes', function(){                     
  $('.accordion-panel:eq(0)')         // Get Step 1
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();                          

  $('.accordion-panel:eq(1)')         // Get Step 2
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();                          
  
  $('.accordion-panel:eq(2)')         // Get Step 3
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();                       

  $('.accordion-panel:eq(3)')         // Get Step 4
  .delay(500);                        // Delay Animation
  $('.accordion-panel:eq(3)')         // Get Step 4
  .not(':animated')                   // If it is not currently animating                                   
  .fadeIn(1000);                         
});

// #confirmPayment
$('.payment').on('click','#creditcard, #qrCode, #mobilePay',function(){                     
  $('.accordion-panel:gt(0)')         // Get all Steps
  .delay(1000); 

  $('.accordion-panel:eq(0)')         // Get Step 1
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();                          

  $('.accordion-panel:eq(1)')         // Get Step 2
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();                          
  
  $('.accordion-panel:eq(2)')         // Get Step 3
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();                       

  $('.accordion-panel:eq(3)')         // Get Step 4
  .not(':animated')                   // If it is not currently animating                                   
  .fadeOut();

  $('.accordion-panel:eq(4)')         // Get Step 4
  .delay(500);                        // Delay Animation
  $('.accordion-panel:eq(4)')         // Get Step 5
  .not(':animated')                   // If it is not currently animating                                   
  .fadeIn(1000);     
});


fetch('https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=560', {
      method: "GET",
      headers: {
          "Authorization": "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg=="
      }
  })
  .then(response => {

      // VIEW RESPONSE
      // console.log(response) 
      return response.json()
  })
  .then(data => {

      /******************
       * VIEW API 
      console.log("API")
      console.log(data);
        */

      const cabinsTotal = data.Booths.length;

      // AMOUNT OF CABINS
      console.log("Total amount of cabins is " + cabinsTotal);

      /******************
       * Solarium name info and image
       
      var newImg = '';
      newImg += data.Booths[0].Presentation.Name + '<br>';
      newImg += data.Booths[0].Presentation.Description + '<br>';
      newImg += '<img src="' + data.Booths[0].Presentation.PictureURL + '" width="186" height="280"><br>';
      document.getElementById('imgId').innerHTML = newImg;
      */

      var newContent = '';

      for (var i = 0; i < cabinsTotal; i++) {
          var cabins = data.Booths[i];
          
          newContent += '<button class="booths" id="booth' + i + '">';
          newContent += '<h1 class="booths-H1" id="boothH1-' + i + '">' + cabins.Description + '<h1>';
          newContent += '<p class="booths-P" id="boothP-' + i + '">' + cabins.Price + ' DKK/min - Max ' + cabins.MaxRunTime + 'min.' + '</p><br>';
          newContent += '<h3 class="booths-H3" id="boothH3-' + i + '">' + cabins.InfoText +
          '</h3>'; //If true set color red - if false set color green (Style this part with image or better text than true/false)
          
          newContent += '</button>';                       
      }

      // WAITS FOR CABIN BUTTONS TO LOAD TO LOAD EVERYTHING ELSE (MAKE A LOADINGSCREEN IN THE BACKGROUND?)
      document.getElementById('grid').style.display = "grid";
    
      // Update the page with the new content
      document.getElementById('content1').innerHTML = newContent;
      $("#booth0").attr("class", "booths active"); // sets an active booth
      
      // DISABLE INUSE CABIN
      for (var i = 0; i < cabinsTotal; i++) {
          var cabins = data.Booths[i];
          console.log("Cabin " + [i + 1] + " is disabled is " + cabins.IsDisabled);
          if (cabins.IsDisabled === true) {
              document.getElementById('booth' + i).setAttribute('disabled', 'disabled');
              document.getElementById('boothH1-' + i).innerHTML += " OPTAGET";
              document.getElementById('boothH3-' + i).innerHTML = cabins.RunTime + "/" + cabins.EndTime + " min";
              document.getElementById('boothP-' + i).innerHTML = "";
              document.getElementById('booth' + i).style.backgroundColor = "#" + (50).toString(16) + (50).toString(16) + (50).toString(16);
              document.getElementById('booth' + i).style.cursor = "not-allowed";
          }
      }


      // DISABLE BETALING BUTTON
      document.getElementById('confirmOrder').setAttribute('disabled', 'disabled');
      document.getElementById('confirmOrder').style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
      document.getElementById('confirmOrder').style.border = "none";
      document.getElementById('confirmOrder').style.cursor = "not-allowed";

      document.getElementById('confirmOrder2').setAttribute('disabled', 'disabled');
      document.getElementById('confirmOrder2').style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
      document.getElementById('confirmOrder2').style.border = "none";
      document.getElementById('confirmOrder2').style.cursor = "not-allowed";
      
      $("#totalPrisId").css("background-color", "rgb(107, 107, 107)");
      $("#totalPris2Id").css("background-color", "rgb(107, 107, 107)"); 
                                      

      /*****************
       * SETS THE CHOSEN CABIN BUTTON TO "ACTIVE" (FOR CSS STYLING)
       */

      var valgtKabine = [];

      // Get the container element
      var btnContainerTid = document.getElementById("content1");

      // Get all buttons with class="tid" inside the container
      var btns = btnContainerTid.getElementsByClassName("booths");

      // Loop through the buttons and add the active class to the current/clicked button
      for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function () {
              var current = document.getElementsByClassName("active");

              // If there's no active class
              if (current.length > 0) {
                  current[0].className = current[0].className.replace(" active", "");
              };


              // Add the active class to the current/clicked button
              this.className += " active";


              // Logs the ID of the KABINE with the active class [USE THIS FOR FULL PRICE]
              valgtKabine.pop();
              valgtKabine.push(document.getElementsByClassName("active")[0].id);

              // VIEW ACTIVE CABIN
              console.log(valgtKabine);

              /*****************
               * CALCULATE FINAL PRICE
               */
              var valgtKabineStr = valgtKabine.toString();;
              var idKabine = parseInt(valgtKabineStr.charAt(5));

              // VIEW "booth.id" FOR CHOSEN CABIN
              // console.log(idKabine);

              // VIEW PRICE FOR CHOSEN CABIN
              var cabins = data.Booths[idKabine].Price;
              console.log("Pris per min " + cabins + " DKK");

              var maxRunTime = data.Booths[idKabine].MaxRunTime;

              // DISABLE BETALING BUTTON IN CASE USER CHANGES OPINION
              document.getElementById('confirmOrder').setAttribute('disabled', 'disabled');
              document.getElementById('confirmOrder').style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
              document.getElementById('confirmOrder').style.border = "none";
              document.getElementById('confirmOrder').style.cursor = "not-allowed";

              document.getElementById('confirmOrder2').setAttribute('disabled', 'disabled');
              document.getElementById('confirmOrder2').style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
              document.getElementById('confirmOrder2').style.border = "none";
              document.getElementById('confirmOrder2').style.cursor = "not-allowed";
              

              $("#totalPrisId").css("background-color", "rgb(107, 107, 107)");
              $("#totalPris2Id").css("background-color", "rgb(107, 107, 107)"); 

              // RESET PRICE IN CASE USER CHANGES OPINION
              var totalPris = '';
              totalPris += '<center><h1><b>Pris: 0 DKK</b></h1></center>';
              document.getElementById("totalPrisId").innerHTML = totalPris;

              // CREATE STEP1BUTTONS
              var newStep1BtnH2 = '';
                                          
              newStep1BtnH2 += '<center>';
              newStep1BtnH2 += '<br>';
              newStep1BtnH2 += '<h2>'
              newStep1BtnH2 += 'VÆLG EN TID (MINUTTER)'
              newStep1BtnH2 += '</h2></center><br><br>'

              document.getElementById('step1BtnH2').innerHTML = newStep1BtnH2;

              var newBtnsTime ='';
              for (var i = 5; i < maxRunTime; i += 5) {
                  newBtnsTime += '<button class="tid" id="' + i + '">';
                  newBtnsTime += '<p>' + i + '</p>';
                  newBtnsTime += '</button>';
              };
              
              //Creates max time button
              newBtnsTime += '<button class="tid" id=' + maxRunTime +'">'
              newBtnsTime += '<p>' + maxRunTime + '</p>';
              newBtnsTime += '</button>';
                            
              // Update the page with the new content
              document.getElementById('btn-tid').innerHTML = newBtnsTime;



              /*****************
               * ACTIVE KNAP TID
               */

              var valgtTid = [];

              // Get the container element
              var btnContainerTid = document.getElementById("btn-tid");

              // Get all buttons with class="tid" inside the container
              var btns = btnContainerTid.getElementsByClassName("tid");

              // Loop through the buttons and add the active class to the current/clicked button
              for (var i = 0; i < btns.length; i++) {
                  btns[i].addEventListener("click", function () {
                      // Checks inside a specific div of the code (PREVENT CABINS BUTTONS ACTIVE to be replaced later)
                      // var current = document.getElementsByClassName("active"); Original Line
                      var nestedBtnTid = document.getElementsByClassName("nested-btn-tid")[0];
                      var current = nestedBtnTid.getElementsByClassName("active");


                      console.log(current);

                      // If there's no active class
                      if (current.length > 0) {
                          current[0].className = current[0].className.replace(
                              "active",
                              "");
                      }

                      // Add the active class to the current/clicked button
                      this.className += " active";


                      // Logs the ID of the button with the active class [USE THIS FOR FULL PRICE]
                      valgtTid.pop();
                      valgtTid.push(parseInt(nestedBtnTid.getElementsByClassName(
                          "active")[0].id));

                      var valgtTidStr = valgtTid.toString();;
                      var idTime = parseInt(valgtTidStr);

                      console.log("valgt tid " + idTime);

                      var totalPris = '';
                      totalPris += '<center><h1><b>Pris: ' + cabins * idTime +
                          ' DKK</b></h1></center>';
                      document.getElementById("totalPrisId").innerHTML = totalPris;
                      document.getElementById("totalPris2Id").innerHTML = totalPris;
                      
                      /****************************
                       * USE THIS FOR FINAL PRICE
                      var finalPris = cabins * idTime;
                      document.getElementById("finalPrisId").innerHTML = finalPris;
                      console.log(finalPris);
                        */
                      
                      // ENABLE BETALING BUTTON
                      document.getElementById('confirmOrder').removeAttribute('disabled');
                      document.getElementById('confirmOrder').style.backgroundColor = "#" + (221).toString(16) + (221).toString(16) + (221).toString(16);
                      document.getElementById('confirmOrder').style.border = "";
                      document.getElementById('confirmOrder').style.cursor = "pointer";

                      document.getElementById('confirmOrder2').removeAttribute('disabled');
                      document.getElementById('confirmOrder2').style.backgroundColor = "#" + (221).toString(16) + (221).toString(16) + (221).toString(16);
                      document.getElementById('confirmOrder2').style.border = "";
                      document.getElementById('confirmOrder2').style.cursor = "pointer";
                      
                      $("#totalPrisId, #totalPris2Id").css("color", "white");
                      $("#totalPrisId").css("background-color", "green");
                      $("#totalPris2Id").css("background-color", "green"); 
                  })
              }
          })
      }
  })
  .catch(error => {
      $('.accordion:eq(0)')         // Get All code from accordion class
      .not(':animated')             // If it is not currently animating                                   
      .hide();                       
      document.getElementById("errorMessage").innerHTML = "<center><h1>Der er sket en fejl, prøv igen!</h1><br><br><h3>Er det anden gang du ser denne besked,<br>kontakt da venligst support på nummer: <b>70 70 40 40</b></h3></h1></center><br><p>Error message: " + error + "</p>"; 
      
      (function(){
          var idleSeconds = 15;
          var idleTimer;
          function resetTimer(){
            clearTimeout(idleTimer);
            idleTimer = setTimeout(whenUserIdle,idleSeconds*1000);
          }
          attachEvent(document.body,'mousemove',resetTimer);
          attachEvent(document.body,'keydown',resetTimer);
          attachEvent(document.body,'click',resetTimer);
        
          resetTimer(); // Start the timer when the page loads
        })();
      
        function whenUserIdle(){
          window.location.href = "start.html";
          }
        
        function attachEvent(obj,evt,fnc,useCapture){
          if (obj.addEventListener){
            obj.addEventListener(evt,fnc,!!useCapture);
            return true;
          } else if (obj.attachEvent){
            return obj.attachEvent("on"+evt,fnc);
          }
        } 
        console.log(error);
  }); 
                

/****************************
 * STEP 5 CREDITCARD
 */
function loadCreditcard() {

  var instructions = '<h2>FØLG INSTRUKTIONERNE PÅ KORT TERMINALEN<br>FOR AT BETALE</h2>';
  document.getElementById('instructions').innerHTML = instructions;
  
  var creditCardContent = '';
  var creditCardContent2 = '';
  
  //SUCCESS                                    
  creditCardContent += '<center>';
  creditCardContent += '<br>';
  creditCardContent += '<h2>'
  creditCardContent += 'BETALINGEN ER MODTAGET - TAK!'
  creditCardContent += '</h2></center><br><br>'

  //FAILURE
  creditCardContent2 += '<center>';
  creditCardContent2 += '<br>';
  creditCardContent2 += '<h2>'
  creditCardContent2 += 'BETALINGEN ER ANNULLERET - PRØV IGEN'
  creditCardContent2 += '</h2></center><br><br>'
  

  var idleSeconds = 10;
  setTimeout(loadCreditcardContent,idleSeconds*1000);
  
  function loadCreditcardContent(){

    var coinflip = 1//Math.floor(Math.random() * 2);

    console.log("0 = Betaling Lykkedes, 1 = Betaling Mislykkedes Resultat: " + coinflip);

    if (coinflip == 0) {
      document.getElementById('loadSpinner').style.display = "none";
      document.getElementById('creditCardContent1').innerHTML = creditCardContent;
      
      idleSeconds = 5
      setTimeout(reset,idleSeconds*1000);
      
      function reset(){
        window.location.href = "start.html";
      } 
    } else if (coinflip == 1) {
        document.getElementById('loadSpinner').style.display = "none";
        document.getElementById('creditCardContent1').innerHTML = creditCardContent2;
      
      idleSeconds = 2
      setTimeout(softReset,idleSeconds*1000);
      
      function softReset(){
          $('.accordion-panel:eq(0)')         // Get Step 1
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                          

          $('.accordion-panel:eq(1)')         // Get Step 2
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                          
          
          $('.accordion-panel:eq(2)')         // Get Step 3
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                       

          $('.accordion-panel:eq(3)')         // Get Step 4
          .delay(500);                        // Delay Animation
          $('.accordion-panel:eq(3)')         // Get Step 4
          .not(':animated')                   // If it is not currently animating                                   
          .fadeIn(1000);
          
          idleSeconds = 1
          setTimeout(contentReset,idleSeconds*1000);
          function contentReset(){
          document.getElementById('loadSpinner').style.display = "block";
          document.getElementById('creditCardContent1').innerHTML = "";
          };
        };
    } else {null};
  };
};

/****************************
 * STEP 5 QRCODE
 */
function loadQrCode() {

  var instructions = '<h2>BRUG SCANNEREN PÅ TERMINALEN<br>FOR AT BETALE MED VORES APP</h2>';
  document.getElementById('instructions').innerHTML = instructions;
  
  var creditCardContent = '';
  var creditCardContent2 = '';
  
  //SUCCESS                                    
  creditCardContent += '<center>';
  creditCardContent += '<br>';
  creditCardContent += '<h2>'
  creditCardContent += 'BETALINGEN ER MODTAGET - TAK!'
  creditCardContent += '</h2></center><br><br>'

  //FAILURE
  creditCardContent2 += '<center>';
  creditCardContent2 += '<br>';
  creditCardContent2 += '<h2>'
  creditCardContent2 += 'BETALINGEN ER ANNULLERET - PRØV IGEN'
  creditCardContent2 += '</h2></center><br><br>'
  

  var idleSeconds = 10;
  setTimeout(loadCreditcardContent,idleSeconds*1000);
  
  function loadCreditcardContent(){

    var coinflip = 1//Math.floor(Math.random() * 2);

    console.log("0 = Betaling Lykkedes, 1 = Betaling Mislykkedes Resultat: " + coinflip);

    if (coinflip == 0) {
      document.getElementById('loadSpinner').style.display = "none";
      document.getElementById('creditCardContent1').innerHTML = creditCardContent;
      
      idleSeconds = 5
      setTimeout(reset,idleSeconds*1000);
      
      function reset(){
        window.location.href = "start.html";
      } 
    } else if (coinflip == 1) {
        document.getElementById('loadSpinner').style.display = "none";
        document.getElementById('creditCardContent1').innerHTML = creditCardContent2;
      
      idleSeconds = 2
      setTimeout(softReset,idleSeconds*1000);
      
      function softReset(){
          $('.accordion-panel:eq(0)')         // Get Step 1
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                          

          $('.accordion-panel:eq(1)')         // Get Step 2
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                          
          
          $('.accordion-panel:eq(2)')         // Get Step 3
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                       

          $('.accordion-panel:eq(3)')         // Get Step 4
          .delay(500);                        // Delay Animation
          $('.accordion-panel:eq(3)')         // Get Step 4
          .not(':animated')                   // If it is not currently animating                                   
          .fadeIn(1000);
          
          idleSeconds = 1
          setTimeout(contentReset,idleSeconds*1000);
          function contentReset(){
          document.getElementById('loadSpinner').style.display = "block";
          document.getElementById('creditCardContent1').innerHTML = "";
          };
        };
    } else {null};
  };
};

/****************************
 * STEP 5 MOBILEPAY
 */
function loadMobilePay() {
  document.getElementById('loadSpinner').style.display = "none";
  var instructions = '<h2>SCAN QR KODEN MED MOBILEPAY<br>FOR AT BETALE</h2><br><br>';
  instructions += "<img src='/img/Payment Images/qrPay4it.png'>"
  document.getElementById('instructions').innerHTML = instructions;
  
  var creditCardContent = '';
  var creditCardContent2 = '';
  
  //SUCCESS                                    
  creditCardContent += '<center>';
  creditCardContent += '<br>';
  creditCardContent += '<h2>'
  creditCardContent += 'BETALINGEN ER MODTAGET - TAK!'
  creditCardContent += '</h2></center><br><br>'

  //FAILURE
  creditCardContent2 += '<center>';
  creditCardContent2 += '<br>';
  creditCardContent2 += '<h2>'
  creditCardContent2 += 'BETALINGEN ER ANNULLERET - PRØV IGEN'
  creditCardContent2 += '</h2></center><br><br>'
  

  var idleSeconds = 10;
  setTimeout(loadCreditcardContent,idleSeconds*1000);
  
  function loadCreditcardContent(){

    var coinflip = 0//Math.floor(Math.random() * 2);

    console.log("0 = Betaling Lykkedes, 1 = Betaling Mislykkedes Resultat: " + coinflip);

    if (coinflip == 0) {
      document.getElementById('loadSpinner').style.display = "none";
      document.getElementById('creditCardContent1').innerHTML = creditCardContent;
      
      idleSeconds = 5
      setTimeout(reset,idleSeconds*1000);
      
      function reset(){
        window.location.href = "start.html";
      } 
    } else if (coinflip == 1) {
        document.getElementById('loadSpinner').style.display = "none";
        document.getElementById('creditCardContent1').innerHTML = creditCardContent2;
      
      idleSeconds = 2
      setTimeout(softReset,idleSeconds*1000);
      
      function softReset(){
          $('.accordion-panel:eq(0)')         // Get Step 1
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                          

          $('.accordion-panel:eq(1)')         // Get Step 2
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                          
          
          $('.accordion-panel:eq(2)')         // Get Step 3
          .not(':animated')                   // If it is not currently animating                                   
          .fadeOut();                       

          $('.accordion-panel:eq(3)')         // Get Step 4
          .delay(500);                        // Delay Animation
          $('.accordion-panel:eq(3)')         // Get Step 4
          .not(':animated')                   // If it is not currently animating                                   
          .fadeIn(1000);
          
          idleSeconds = 1
          setTimeout(contentReset,idleSeconds*1000);
          function contentReset(){
          document.getElementById('loadSpinner').style.display = "block";
          document.getElementById('creditCardContent1').innerHTML = "";
          };
        };
    } else {null};
  };
};
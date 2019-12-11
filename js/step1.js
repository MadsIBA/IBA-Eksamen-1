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
                        newContent += '<h3 class="booths-H3" id="boothH3-' + i + '">' +
                        '<h3>'; //If true set color red - if false set color green (Style this part with image or better text than true/false)
                        newContent += '<p class="booths-P" id="boothP-' + i + '">' + cabins.Price + ' DKK/min - max tid er ' + cabins.MaxRunTime + 'min.' + '</p>';
                        newContent += '</button>';                       
                    }

                    // WAITS FOR CABIN BUTTONS TO LOAD TO LOAD EVERYTHING ELSE (MAKE A LOADINGSCREEN IN THE BACKGROUND?)
                    document.getElementById('grid').style.display = "grid";
                 
                    // Update the page with the new content
                    document.getElementById('content1').innerHTML = newContent;
                    
                    // DISABLE INUSE CABIN
                    for (var i = 0; i < cabinsTotal; i++) {
                        var cabins = data.Booths[i];
                        console.log("Cabin " + [i + 1] + " is disabled is " + cabins.IsDisabled);
                        if (cabins.IsDisabled === true) {
                            document.getElementById('booth' + i).setAttribute('disabled', 'disabled');
                            document.getElementById('boothH3-' + i).innerHTML = "Optaget: " + cabins.RunTime + "/" + cabins.EndTime + " min";
                            document.getElementById('boothP-' + i).innerHTML = "";
                            document.getElementById('booth' + i).style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
                            document.getElementById('booth' + i).style.cursor = "not-allowed";
                        }
                    }

                    // DISBALE BETALING BUTTON
                    document.getElementById('menuPay').setAttribute('disabled', 'disabled');
                    document.getElementById('menuPay').style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
                    document.getElementById('menuPay').style.border = "none";
                    document.getElementById('menuPay').style.cursor = "not-allowed";

                    
                                                    

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

                            // DISBALE BETALING BUTTON IN CASE USER CHANGES OPINION
                            document.getElementById('menuPay').setAttribute('disabled', 'disabled');
                            document.getElementById('menuPay').style.backgroundColor = "#" + (107).toString(16) + (107).toString(16) + (107).toString(16);
                            document.getElementById('menuPay').style.border = "none";
                            document.getElementById('menuPay').style.cursor = "not-allowed";

                            // CREATE STEP 2
                            var newStep2 = '';
                                                       
                            newStep2 += '<center><h2>';
                            newStep2 += 'STEP 2'
                            newStep2 += '</h2><br>';
                            newStep2 += '<h3>'
                            newStep2 += 'Vælg en tid i minutter'
                            newStep2 += '</h3></center><br><br>'

                            document.getElementById('step2').innerHTML = newStep2;

                            var newBtnsTime ='';
                            for (var i = 5; i < maxRunTime + 1; i++) {
                                newBtnsTime += '<button class="tid" id="' + i + '">';
                                newBtnsTime += '<p>' + i + '</p>';
                                newBtnsTime += '</button>';
                            };
                                          
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
                                    
                                    
                                    // ENABLE BETALING BUTTON
                                    document.getElementById('menuPay').removeAttribute('disabled');
                                    document.getElementById('menuPay').style.backgroundColor = "#" + (221).toString(16) + (221).toString(16) + (221).toString(16);
                                    document.getElementById('menuPay').style.border = "";
                                    document.getElementById('menuPay').style.cursor = "pointer";
                                    
                                  
                                })
                            }
                        })
                    }
                })
                .catch(error => console.log(error));
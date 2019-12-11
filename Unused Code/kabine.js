// MOVE THIS TO REFERENCE CODE

var valgtTid = [];


/*****************
 * PRIS FOR KABINE
 */

//var time = 20; // DEBUG
var time = valgtTid; // BRUG ACTIVE KNAP TID (SIDSTE LINJE)

var Cabin = function (number, amountOfTubes, pricePerMin) {
    this.number = number;
    this.amountOfTubes = amountOfTubes;
    this.pricePerMin = pricePerMin;
};

Cabin.prototype.calcPrice = function () {
    //Tid * pris
    console.log(time * this.pricePerMin); // Default Value is first button class="tid" ID (5)
};

var cabin1 = new Cabin('Kabine 1', 52, 5, );
var cabin2 = new Cabin('Kabine 2', 48, 4.5, );
var cabin3 = new Cabin('Kabine 3', 40, 3, );

/*****************
 * ENTER IN CONSOLE TO TEST
 * cabin1.calcPrice();
 * cabin2.calcPrice();
 * cabin3.calcPrice();
 */

cabin1.calcPrice();
cabin2.calcPrice();
cabin3.calcPrice();

/*****************
 * ACTIVE KNAP TID
 */

// Get the container element
var btnContainerTid = document.getElementById("btn-tid");

// Get all buttons with class="tid" inside the container
var btns = btnContainerTid.getElementsByClassName("tid");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";


        // Logs the ID of the button with the active class [USE THIS FOR FULL PRICE]
        valgtTid.pop();
        valgtTid.push(parseInt(document.getElementsByClassName("active")[0].id));

        /*************************
         * PRINTER VALG AF TID TIL DOM
               
        if (!document.getElementById("valgTid")) {
            var tid = document.createElement("div");
            tid.id = "valgTid";
            tid.innerHTML = "Du har valgt " + activeTid + " minutter";
            document.body.appendChild(tid);
            // Else remove ELEMENT
        } else {
            var elem = document.getElementById("valgTid");
            elem.remove();
            // And create it again
            var tid = document.createElement("div");
            tid.id = "valgTid";
            tid.innerHTML = "Du har valgt " + activeTid + " minutter";
            document.body.appendChild(tid);
        }
         */

        /*****************
         * FULL PRICE
         */
        

        for (var i = 1; i < 4; i++) {
            if (!document.getElementById("kabine" + i)) {
               
                // CREATE BUTTON
                var kabineElem = document.createElement("button");
                kabineElem.className = "kabine"
                kabineElem.id = "kabine" + i
                kabineElem.onclick = function () {
                    loadStep1();                   
                    cabin1.calcPrice(); //FIX THIS PART Cabin + i?
                    cabin2.calcPrice(); //
                    cabin3.calcPrice(); //
                    return false;
                };

                // CREATE <H3></H3>
                var kabineTitle = document.createElement("h3")
                kabineTitle.innerHTML = "Vælg Kabine " + i

                // CREATE <P></P
                var kabinePris = document.createElement("p")
                kabinePris.id = "kabineP" + i
                
                if (i === 1) {
                    kabinePris.innerHTML = "<br> Pris 5kr/min " + cabin1.calcPrice() //FIX THIS PART - Pris skriver undefinded
                } else if (i === 2) {
                    kabinePris.innerHTML = "<br> Pris 4.5kr/min " + cabin2.calcPrice() //FIX THIS PART - Pris skriver undefinded
                } else {
                    kabinePris.innerHTML = "<br> Pris 3kr/min " + cabin3.calcPrice() //FIX THIS PART - Pris skriver undefinded
                }
                document.getElementById("btn-kabine").appendChild(kabineElem);
                document.getElementById("kabine" + i).appendChild(kabineTitle);
                document.getElementById("kabine" + i).appendChild(kabinePris);

            } else {
                var elem = document.getElementById("kabine" + i);
                elem.remove();

                // CREATE BUTTON
                var kabineElem = document.createElement("button");
                kabineElem.className = "kabine"
                kabineElem.id = "kabine" + i
                kabineElem.onclick = function () {
                    loadStep1();
                    cabin1.calcPrice(); //FIX THIS PART Cabin + i?
                    cabin2.calcPrice(); //
                    cabin3.calcPrice(); //
                    return false;
                };

                // CREATE <H3></H3>
                var kabineTitle = document.createElement("h3")
                kabineTitle.innerHTML = "Vælg Kabine " + i

                // CREATE <P></P>
                var kabinePris = document.createElement("p")
                kabinePris.id = "kabineP" + i

                if (i === 1) {
                    kabinePris.innerHTML = "<br> Pris 5kr/min " + cabin1.calcPrice() //FIX THIS PART - Pris skriver undefinded
                } else if (i === 2) {
                    kabinePris.innerHTML = "<br> Pris 4.5kr/min " + cabin2.calcPrice() //FIX THIS PART - Pris skriver undefinded
                } else {
                    kabinePris.innerHTML = "<br> Pris 3kr/min " + cabin3.calcPrice() //FIX THIS PART - Pris skriver undefinded
                }
                document.getElementById("btn-kabine").appendChild(kabineElem);
                document.getElementById("kabine" + i).appendChild(kabineTitle);
                document.getElementById("kabine" + i).appendChild(kabinePris);
            }
        }
    });
};




/*****************
 * AKTIVERE NEXT KNAP
 */
function loadStep1() {

    // If ELEMENT does not exist create new element
    if (!document.getElementById("btn-next")) {
        var btn = document.createElement("button");
        btn.id = "btn-next";
        btn.innerHTML = "<a href='http://youtube.com'>Youtube</a>"; //REPLACE LINK
        document.body.appendChild(btn);
        // Else remove ELEMENT
    } else {
        var elem = document.getElementById("btn-next");
        elem.remove();
        // And create it again
        var btn = document.createElement("button");
        btn.id = "btn-next";
        btn.innerHTML = "<a href='http://youtube.com'>Youtube</a>"; //REPLACE LINK
        document.body.appendChild(btn);
    }
};
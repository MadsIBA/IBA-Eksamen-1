// MOVE THIS TO REFERENCE CODE

var xhr = new XMLHttpRequest()

xhr.open('GET', 'https://consolwebapi.pay4it.dk/api/Devices/Detail?deviceID=560', true)
xhr.setRequestHeader("Authorization", "Basic cmlra2Vkb21pbm9AZ21haWwuY29tOlJEc2gzbXBCdg==");
xhr.onload = function() {                       // When readystate changes
    // The following conditional check will not work locally - only on a server
    if(xhr.status === 200) {                      // If server status was ok
      responseObject = JSON.parse(xhr.responseText);
  
      // BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation)
      var newContent = '';
      for (var i = 0; i < responseObject.Booths.length; i++) { // Loop through object
        newContent += '<div class="Booths">';
        newContent += '<p id="test' + i + '">' + responseObject.Booths[i].Price + '</p>';
        newContent += '</div>';
      }
  
      // Update the page with the new content
      document.getElementById('content').innerHTML = newContent;
  
    }
  };
  

  //xhr.open('GET', 'data/data.json', true);        // Prepare the request
  xhr.send(null);                                 // Send the request
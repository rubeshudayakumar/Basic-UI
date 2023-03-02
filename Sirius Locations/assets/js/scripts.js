

$(document).ready(function () {

    $( function() {
        $( "#accordion" ).accordion();
      } );

    // initially selecting the about us tab and this about us section will be displayed
    var prevSelectedTab = $(".active");
    var prevSelectedSection = $(".about-us-section");

    // adding click event listeners for all the tabs
    $(".tab").click(function (e) { 

        // toggling the tab color to the clicked tab
        prevSelectedTab.toggleClass("active");
        $(this).toggleClass("active");
        prevSelectedTab = $(this);
        
        // toggling the section with the selected tab
        prevSelectedSection.toggleClass("tab-display-control");
        var selectedTabName = $(this)[0].outerHTML.toString().split("tab")[1].trim();
        $("."+selectedTabName+"section").toggleClass("tab-display-control");
        prevSelectedSection = $("."+selectedTabName+"section");
    });

    // console.log(locations);



    for(var i=0;i<locations.length;i++){
      var container =   document.createElement("div");
      $(".locations-section").append(container);
      container.classList.add("locations-container");
      if(i%2==0){
        container.classList.add("grey-container");
      }
      else{
        container.classList.add("pink-container");
      }
      var img = document.createElement("img");
      img.src = "./assets/images/flag.png";
      container.appendChild(img);
    }

});
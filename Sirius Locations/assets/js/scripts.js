

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

      var $container;

      // creating the container
      if(i%2==0){
        $container = $("<div>");
        $(".locations-section").append($($container).addClass("locations-container grey-container"));
      }else{
        $container = $("<div>")
        $(".locations-section").append($($container).addClass("locations-container pink-container")); 
      }
      
      // creating the image
      var $img = $("<img>").attr("src","./assets/images/flag.png")

      //appending the values
      $container.append($img);
      $container.append($("<div>").addClass("state").text(locations[i].state));
      $container.append($("<div>").addClass("city").text(locations[i].city));
      $container.append($("<div>").addClass("phone-no").text(locations[i].contact));

    }

});
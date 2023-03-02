$(document).ready(function () {

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

    

});
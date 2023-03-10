$(document).ready(function () {
    var posters;

    var video;

    function ajaxCall(url,loadingSelector){
        let data;
        $.ajax({
            async: false,
            type: "get",
            url: url,
            data: "data",
            dataType: "json", 
    
            // showing loading icon
            beforeSend: function(){
                $(loadingSelector).show();
            },
    
            // changing the video variable and hiding the loading screen with the success function
            success: function (response) {
                data = response;
                $(loadingSelector).hide();
            }
        })
        return data;
    }

    // loading the video data from the API
    video = ajaxCall("https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0","#video-loading");

    // setting the profile picture and name 
    $(".profile-section img").attr("src","./assets/"+video.comments[3].image);
    $("h5").text(video.comments[3].name);

    // setting up the video with the help of URL feteched from the API
    $("video").attr("src",video.videoUrl);
    $("h3").text(video.title);
    $(".video-description p").text(video.description);
    
    // getting the posters data with the help of the API
    posters = ajaxCall("https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346","#poster-loading");

    // appending the posters to the dom
    posters.forEach((poster) => {
        var posterImage = document.createElement("img");
        $(".poster-section").append(posterImage);
        posterImage.src = poster.imageUrl;
        posterImage.alt = ("alt",poster.title);
    });
    
    
    // including the video comments
    video.comments.forEach((commentItem) => {
        // creating comments container
        $commentContainer = $("<div>");
        $commentContainer.attr("class","comment-container");

         // creating commenter profile image
        $commentContainer.append($("<img>").attr("src","./assets/"+commentItem.image));

        // creating the comment div
        $comment = $("<div>").attr("class","comment");

        // creating the commentors name in h5 tag
        $comment.append($("<h5>").text(commentItem.name));

        // creating the comment content in the p tag
        $comment.append($("<p>").text(commentItem.comment));
        
        // appending it to the comment container
        $commentContainer.append($comment);
        $(".comments-section").append($commentContainer);

    });
});



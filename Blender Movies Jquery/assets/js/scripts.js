var posters;

var video;

$(document).ready(function () {

    // loading the video data from the API
    $.ajax({
        async: false,
        type: "get",
        url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
        data: "data",
        dataType: "json", 

        // showing loading icon
        beforeSend: function(){
            $("#video-loading").show();
        },

        // changing the video variable and hiding the loading screen with the success function
        success: function (response) {
            video = response;
            $("#video-loading").hide();
        }
    })

    // setting the profile picture and name 
    $(".profile-section img").attr("src","./assets/"+video.comments[3].image);
    $("h5").text(video.comments[3].name);

    // setting up the video with the help of URL feteched from the API
    $("video").attr("src",video.videoUrl);
    $("h3").text(video.title);
    $(".video-description p").text(video.description);
    
    // getting the posters data with the help of the API
    $.ajax({
        async: false,
        type: "get",
        url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
        data: "data",
        dataType: "json", 

        // showing loading icon 
        beforeSend : function(){
            $("#poster-loading").show();
        },

        // changing the posters variable and hiding the loading icon
        success: function (response) {
            posters = response;
            $("#poster-loading").hide();
        }
    });

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
        var commentContainer = document.createElement("div");
        commentContainer.className = "comment-container";
        $(".comments-section").append(commentContainer);

        // creating commenter profile image
        var commenterImg = document.createElement("img");
        commenterImg.src = "./assets/"+commentItem.image;
        commenterImg.alt = commentItem.name;
        commentContainer.appendChild(commenterImg);

        // creating the comment div
        var comment = document.createElement("div");
        comment.className = "comment";

        // creating the commentors name in h5 tag
        var commenterName = document.createElement("h5");
        commenterName.innerText = commentItem.name;
        comment.appendChild(commenterName);
        
        // creating the comment content in the p tag
        var commentDescription = document.createElement("p");
        commentDescription.innerHTML = commentItem.comment;
        comment.appendChild(commentDescription);

        // appending it to the comment container
        commentContainer.appendChild(comment);
    });
});



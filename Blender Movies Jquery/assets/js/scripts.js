var posters;

var video;

$(document).ready(function () {

    $.ajax({
        async: false,
        type: "get",
        url: "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
        data: "data",
        dataType: "json", 
        beforeSend: function(){
            $("#video-loading").show();
        },
        success: function (response) {
            video = response;
            $("#video-loading").hide();
        }
    })

    $(".profile-section img").attr("src","./assets/"+video.comments[3].image);
    $("h5").text(video.comments[3].name);
    $("video").attr("src",video.videoUrl);
    $("h3").text(video.title);
    $(".video-description p").text(video.description);
    
    $.ajax({
        async: false,
        type: "get",
        url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
        data: "data",
        dataType: "json", 
        beforeSend : function(){
            $("#poster-loading").show();
        },
        success: function (response) {
            posters = response;
            
            posters.forEach((poster) => {
                var posterImage = document.createElement("img");
                $(".poster-section").append(posterImage);
                posterImage.src = poster.imageUrl;
                posterImage.alt = ("alt",poster.title);
            });
            $("#poster-loading").hide();
        }
    });

    video.comments.forEach((commentItem) => {
        console.log(commentItem);
        var commentContainer = document.createElement("div");
        commentContainer.className = "comment-container";

        $(".comments-section").append(commentContainer);

        var commenterImg = document.createElement("img");
        commenterImg.src = "./assets/"+commentItem.image;
        commenterImg.alt = commentItem.name;
        commentContainer.appendChild(commenterImg);

        var comment = document.createElement("div");
        comment.className = "comment";

        var commenterName = document.createElement("h5");
        commenterName.innerText = commentItem.name;
        comment.appendChild(commenterName);

        var commentDescription = document.createElement("p");
        commentDescription.innerHTML = commentItem.comment;
        comment.appendChild(commentDescription);

        commentContainer.appendChild(comment);
    });
});



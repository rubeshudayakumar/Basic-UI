// adding profile image from the data
document.querySelector(".profile-section img").setAttribute("src",video.comments[3].image);

// adding profile image from the data
document.getElementsByTagName("h5")[0].innerHTML = video.comments[3].name;

// adding video from data
document.getElementsByTagName("video")[0].src = video.videoUrl;

// adding video title from data
document.getElementsByTagName("h3")[0].innerText = video.title;

// adding video description from data
document.querySelector(".video-description p").innerText = video.description;

// adding posters to the data
var posterSection = document.querySelector(".poster-section");

// posters.forEach((poster) => {
//     posterImage = posterSection.appendChild(document.createElement("img"));
//     posterImage.src = poster.imageUrl;
//     posterImage.setAttribute("alt",poster.title);
// })

// adding comments to the comments section
var commentsSection = document.querySelector(".comments-section");

// video.comments.forEach((commentItem) => {
//     // adding comment container
//     var commentContainer = commentsSection.appendChild(document.createElement("div"));
//     commentContainer.className = "comment-container";

//     // adding commenter image
//     var commenterImg =  commentContainer.appendChild(document.createElement("img"));
//     commenterImg.src = commentItem.image;
//     commenterImg.alt = commentItem.name;

//     // adding commenter name and comment
//     var comment = commentContainer.appendChild(document.createElement("div"));
//     comment.className = "comment";

//     // adding name
//     var commenterName = comment.appendChild(document.createElement("h5"));
//     commenterName.innerText = commentItem.name;

//     // adding comment description
//     var commentDescription = comment.appendChild(document.createElement("p"));
//     commentDescription.innerText = commentItem.comment;

// });

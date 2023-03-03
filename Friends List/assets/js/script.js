// targeting the main friend list container

var listContainer = document.querySelector(".friends-list-section");

var friendsList = friendsList;

friendsList.forEach((item)=>{
    // creating friends list item container
    let friendsListItemContainer = listContainer.appendChild(document.createElement("div"));
    friendsListItemContainer.className = "friends-list-item-container";

    // creating profile image and appending it to the list item container
    let friendProfileImage = friendsListItemContainer.appendChild(document.createElement("img"));
    friendProfileImage.src = item.img;
    friendProfileImage.alt = item.first_name;

    // creating friends detail container 
    let friendsDetailContainer = friendsListItemContainer.appendChild(document.createElement("div"));
    friendsDetailContainer.className = "friends-detail-container";

    // creating and appending the friends details
    let friendsName = friendsDetailContainer.appendChild(document.createElement("h3"));
    friendsName.innerHTML = `${item.first_name} ${item.last_name}`;
    let friendEmail = friendsDetailContainer.appendChild(document.createElement("p"));
    friendEmail.innerHTML = item.email;
});
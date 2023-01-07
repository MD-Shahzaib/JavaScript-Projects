// function for goto ad post.html
window.createAdd = function () {
    window.location.href = 'ad post.html'
}

// function for goto ad myads.html
window.myAds = function () {
    window.location.href = 'myads.html'
}


// ------------------- detail page function starts here ----------------.

import { detailPage, checkRoom, createRoom } from './firebase/config.js'

// getAdsDetail function call.
getAdsDetail()

//function for getAdsDetail start.
async function getAdsDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id')
    try {
        const data = await detailPage(id)
        console.log('ads id ==> ', id);
        console.log('data ==> ', data);
        // get detailelement and throw HTML Dynamically.
        document.getElementById("ads-detail").innerHTML += `
            <div class="row1">
            <div class="img-container">
                <img src="${data.imageUrl}" alt="...">
            </div>
            <div class="description-container">
                <div class="detl-box">
                    <div class="desc-box-heading">
                        <span>Details</span>
                    </div>
                    <div class="detl-box-content">
                        <div class="content1">
                            <span class="span-index">Title</span>
                            <span class="span-value">${data.title}</span>
                        </div>
                        <div class="content1">
                            <span class="span-index">Price</span>
                            <span class="span-value">${data.price}</span>
                        </div>
                        <div class="content1">
                            <span class="span-index">Condition</span>
                            <span class="span-value">New</span>
                        </div>
                    </div>
                    <hr>
                </div>
                <div class="desc-box">
                    <div class="desc-box-heading">
                        <span>Description</span>
                    </div>
                    <span class="span-value">${data.description}</span>
                </div>
            </div>
        </div>

        <div class="row2">
            <div class="price-container">
                <div class="price">
                    <span>${data.price}</span>
                </div>
                <div class="desc">
                    <span>${data.title}</span>
                </div>
                <div class="place">
                    <span>Saddar, Karachi</span>
                    <span>29 minutes ago</span>
                </div>
            </div>
            <div class="seller-container">
                <div class="seller-desc">
                    <span>Seller Description</span>
                </div>
                <div class="Member">
                    <div>
                        <img src="images/iconProfilePicture.png" alt="">
                    </div>
                    <div class="member-info">
                        <span class="info-name">Adeel</span>
                        <span class="span-index">Member since Jan 2015</span>
                    </div>
                </div>
                <button onclick="chatBox('${data.userID}')" class="chat-btn">Chat with seller</button>
            </div>
            <div class="posted-container">
                <span class="desc-box-heading">Posted in</span>
                <span class="place">Saddar, Karachi</span>
                <img class="map" src="images/detail2.jpg" alt="Map placeholder">
                <span class="location">SEE LOCATION</span>
            </div>
        </div>`
    } catch (e) {
        console.log(e.message)
    }
}
//function for getAdsDetail end.






// function for go to chat room start.
window.chatBox = async function (sellerId) {
    let roomInfo = await checkRoom(sellerId)
    if (!roomInfo) {
        roomInfo = await createRoom(sellerId)
    }
    const chatroomId = roomInfo.id
    console.log("chatroomId ===>", chatroomId)
    location.href = `../chatroom.html?room-id=${chatroomId}`
}
// function for go to chat room end.

// ------------------- detail page function ends here --------------------.





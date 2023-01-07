// ----------------- chatroom function starts here ------------------.

import { getChatroomData, getRealtimeMessages, messages, auth } from './firebase/config.js'

// call the function.
realTime()
getChatroomToDb()



//function for get the real time chat Data.
function realTime() {
    const roomId = chatroomId();
    getRealtimeMessages(roomId, (msg) => {
        const msgElem = document.getElementById('msg-box');
        msgElem.innerHTML = '';
        for (let item of msg) {
            let color;
            if (item.userId == auth.currentUser.uid) {
                color = 'orange'
            } else {
                color = 'white'
            }
            msgElem.innerHTML += `
            <div class="message-${color}" >
                <span>${item.text}</span>
                <span id="time">  ${new Date(item.createdAt).toLocaleTimeString()}</span>
            </div>`
        }
    })
}

// function for get the chatroom Id.
function chatroomId() {
    const urlParams = new URLSearchParams(window.location.search);
    const roomId = urlParams.get('room-id');
    return roomId;
}



// function for get the chatroom to firestore.
async function getChatroomToDb() {
    const roomId = chatroomId()
    const data = await getChatroomData(roomId)
    console.log('data = ===>', data)
}



// function for send Messages. 
window.sendMsg = function () {
    // grab the input.
    const text = document.getElementById('input');
    if (text.value == '') {
        alert('empty text not valid for send message, Please write Something...')
    } else {
        const roomId = chatroomId()
        messages(text.value, roomId)
        text.value = '';
    }
}




// function for send message with (enter) key.
// function sendMsgByEnter(e) {
//     if (e.key === 'Enter') {
//         e.preventDefault();
//         document.getElementById('send-Btn').click();
//     }
// }

// ----------------- chatroom function ends here --------------------.
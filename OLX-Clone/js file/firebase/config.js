// Import the functions you need from the SDKs you need.

// 1. Import firebase-app.js.
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
// 2. Import firebase-auth.js.
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-auth.js";
// 2. Import firebase-Firestore.js.
import { getFirestore, collection, addDoc, setDoc, doc, getDocs, getDoc, query, where, orderBy, onSnapshot } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
// 2. Import firebase-storage.js.
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-storage.js";

// Your web app's Firebase configuration.
const firebaseConfig = {
    apiKey: "AIzaSyAWTFlSFsfKcS3YZDwkbKMS8JVYtBrJrMg",
    authDomain: "olx---firebase-project.firebaseapp.com",
    projectId: "olx---firebase-project",
    storageBucket: "olx---firebase-project.appspot.com",
    messagingSenderId: "65155728340",
    appId: "1:65155728340:web:749df573a5a2c34f178c41"
};

// Initialize Firebase ----------------------------------------------------.
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication--------------------------------------.
const auth = getAuth(app);
// Initialize Firebase Firestore ------------------------------------------.
const db = getFirestore(app);
// Initialize Firebase Storage ------------------------------------------.
const storage = getStorage(app);

// ------------------------------------------------------------------------
// console.log('firebase app-implement --------- ', app)
// console.log('firebase auth-implement --------- ', auth)
// console.log('firebase Firestore-implement --------- ', db)
// console.log('firebase Storage-implement --------- ', storage)
// ------------------------------------------------------------------------



// ---------------- function for sign-in-firebase -------------------------
async function signInFirebase(userInfo) {
    const { email, password } = userInfo
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log('userCredential.user.uid ===> ', userCredential.user.uid)
    console.log('addUserToDb function call ...')
    addUserToDb(userInfo, userCredential.user.uid)
}
// ---------------- function for sign-in-firebase -------------------------

// ---------------- function for log-in-firebase -------------------------
function logInFirebase(l_email, l_password) {
    signInWithEmailAndPassword(auth, l_email, l_password)
        .then((userCredential) => {
            console.log(`Successfully LOGIN ==> [ ${userCredential.user.uid} ]`)
            console.log('logInFirebase function end.')
            window.location.href = 'index.html'
        })
        .catch((error) => {
            console.log('Error.message: ', error.message)
        });
}
// ---------------- function for log-in-firebase -------------------------

// --------------- function for addUser To firestore --------------------
function addUserToDb(userInfo, uid) {
    const { name, address, gender, email, password } = userInfo
    setDoc(doc(db, "users", uid), { name, address, gender, email, password })
    try {
        alert('Successfully addUserToDb...!')
    } catch (error) {
        console.log('Error: ', e.message)
    }
}
// --------------- function for addUser To firestore --------------------

// --------------- function for post Ad To firestore --------------------
function postAdToDb(cardInfo, imageUrl) {
    const { title, price, description } = cardInfo
    const userID = auth.currentUser.uid
    addDoc(collection(db, "ads"), { title, price, description, userID, imageUrl })
    try {
        console.log('userID ===> ', userID)
        console.log('Successfully postAdToDb')
    } catch (error) {
        console.log('Error: ', error.message)
    }
}
// --------------- function for post Ad To firestore --------------------

// --------------- function for uploadImage To storage --------------------
async function uploadImage(image) {
    console.log('uploadImage function run')
    const storageRef = ref(storage, `Images/${image.name}`);
    const snapshot = await uploadBytes(storageRef, image)
    const url = await getDownloadURL(snapshot.ref)
    try {
        console.log('\n storageRef ===> ', storageRef, '\n snapshot ===> ', snapshot, '\n url ===> ', url);
        return url
    } catch (error) {
        console.log('Error: ===> ', error.message)
    }
}
// --------------- function for uploadImage To storage --------------------

// --------------- function for getAdsToDataBase  --------------------
async function getAdsTodb() {
    const querySnapshot = await getDocs(collection(db, "ads"));
    let ads = []
    querySnapshot.forEach((doc) => {
        ads.push({ id: doc.id, ...doc.data() })
    });
    return ads
}
// --------------- function for getAdsToDataBase  --------------------

// ----------------------- function for detailPage ---------------------------
async function detailPage(id) {
    const docRef = await doc(db, 'ads', id)
    const docSnap = await getDoc(docRef)
    try {
        return docSnap.data()
    } catch (error) {
        console.log('error ===> ', error.message)
    }
}
// ----------------------- function for detailPage ---------------------------


// ----------------------- function for chat room start ------------------------.

// create checkRoom function.
async function checkRoom(sellerId) {
    const q = query(collection(db, "chatrooms"), where(`users.${sellerId}`, "==", true), where(`users.${auth.currentUser.uid}`, "==", true));
    const snapshot = await getDocs(q);
    console.log(`snapshot ===>  ${snapshot} \n querry ===> ${q}`)
    let room;
    //collect the data by loop. 
    snapshot.forEach((doc) => {
        console.log(`user ===> ${doc.id} data ===> ${doc.data()}`)
        room = { id: doc.id, ...doc.data() }
    })
    console.log('room checking...');
    alert(`sellerId ==> ${sellerId} \n auth.currentUser.uid ${auth.currentUser.uid}`);

    return room;
}

// create chatRoom function.
function createRoom(sellerId) {
    const userRoomInfo = {
        users: {
            [sellerId]: true,
            [auth.currentUser.uid]: true
        },
        createdAt: Date.now(),
        lastMessage: {}
    }
    console.log(`sellerId ==> ${sellerId} \n auth.currentUser.uid ${auth.currentUser.uid}`);
    alert(`sellerId ==> ${sellerId} \n auth.currentUser.uid ${auth.currentUser.uid}`);
    console.log('room create successfully.');

    return addDoc(collection(db, "chatrooms"), userRoomInfo)
}

//get data to firestore for chatroom.js.
async function getChatroomData(chatRoomid) {
    const docRef = await doc(db, 'chatrooms', `${chatRoomid}`)
    const docSnap = await getDoc(docRef)
    console.log("Chatroom.id = ", chatRoomid)
    return docSnap.data();
}

// function for add message to chatroom collection. 
function messages(text, roomId) {
    const obj = { text, createdAt: Date.now(), userId: auth.currentUser.uid }
    try {
        const messageRef = addDoc(collection(db, 'chatrooms', `${roomId}`, 'messages'), obj)
        console.log(`obj ==> ${obj}`)
        console.log(`text ==> ${text}`)
        console.log(`roomId ==> ${roomId}`)
        console.log('messageRef ==>', messageRef)
    } catch (error) {
        console.error('error ===> ', error.message);
    }
}

// function for getRealtimeMessages.
function getRealtimeMessages(roomId, callback) {
    const q = query(collection(db, 'chatrooms', `${roomId}`, 'messages'), orderBy('createdAt'));
    onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({ id: doc.id, ...doc.data() })
        })
        console.log('messages ======= ', messages);
        callback(messages)
    })
}

// ----------------------- function for chat room end --------------------------.

// ------------------------ export functions to js files ------------------------.
export {
    signInFirebase,
    logInFirebase,
    postAdToDb,
    uploadImage,
    getAdsTodb,
    detailPage,
    checkRoom,
    createRoom,
    getChatroomData,
    getRealtimeMessages,
    messages,
    auth
}
// ------------------ export functions to js files ------------------.

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> End code <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<.
/*
1. Create a Register user screen. Fields: Fullname,profilePicture (URL), email, password.On signing up,    ------- it should add in the users array.---------

2. Create a Login screen, Fields: Email, passsword. On signing it, it should check if any user exist with same email & password, -----------it should show Friends Sceen, otherwise it should show error "Invalid Credentials"------------

----------3. Create a Friends Screen, it should show all friends of logged in user, and a button to ADD FRIENDS. A button REMOVE FRIEND with each friend.

4. Create a Add Friend screen, it should show all users register in your app with a button Add Friend with each user. On clicking it, it should add to the current users friend. Once added, it should again show Friends Screen----------

5. Continuing last assignment, on friends screen, there should be a button to add post.
Upon clicking, a form should appear having a description input & files uploading input through which user can upload images/videos.
Once he post, only the user & his friends should be able to see that posts or other posts on the Friends list page.
-------------------------------------------------------------------------------*/


















// function for display logIn and signup conatiners. 
var sign_Container = document.getElementById('sign-up-form')
sign_Container.style.display = 'none'

function openSignUp() {
    var sign_Container = document.getElementById('sign-up-form')
    sign_Container.style.display = 'flex'
    sign_Container.style.position = 'absolute'
    sign_Container.style.background = 'none'
    sign_Container.style.zIndex = '1'
    var log_Container = document.getElementById('log-in-form')
    log_Container.style.opacity = '30%'
}

// function for close signup conatiner. 
function closeSignUp() {
    var sign_Container = document.getElementById('sign-up-form')
    var log_Container = document.getElementById('log-in-form')
    sign_Container.style.display = 'none'
    log_Container.style.opacity = 'unset'
    location.reload();
}


// sign-in function
function signIn() {
    var s_name = document.getElementById('s_name').value
    var s_url = document.getElementById('s_url').value
    var s_email = document.getElementById('s_email').value
    var s_password = document.getElementById('s_password').value

    if (s_name === '') {
        alert('please fill Name feilds!')
    }
    else if (s_url === '') {
        alert('please fill URL feilds!')
    }
    else if (s_email === '') {
        alert('please fill Email feilds!')
    }
    else if (s_password === '') {
        alert('please fill Password feilds!')
    }
    else {
        localStorage.setItem('s_name', s_name)
        localStorage.setItem('s_url', s_url)
        localStorage.setItem('s_email', s_email)
        localStorage.setItem('s_password', s_password)

        alert('user registered successfully!')
        window.location.href = "login.html"
    }
}

// log-in function
function logIn() {
    var l_email = document.getElementById('l_email').value
    var l_password = document.getElementById('l_password').value
    var s_email = localStorage.getItem('s_email')
    var s_password = localStorage.getItem('s_password')

    if (l_email === s_email && l_password === s_password) {
        alert('user log-in successfully!')
        window.location.href = "friends.html"
    }
    else if (l_email === '') {
        alert('please fill Password feilds!')
    }
    else if (l_password === '') {
        alert('please fill Password feilds!')
    }
    else {
        alert('Looks like input feilds is incorrect.')
    }
}













// function for display logIn and signup conatiners. 
var sign_Container = document.getElementById('sign-up-form')
sign_Container.style.display = 'none'

// function for open signup conatiner. 
window.openSignUp = function () {
    var sign_Container = document.getElementById('sign-up-form')
    sign_Container.style.display = 'flex'
    sign_Container.style.position = 'absolute'
    sign_Container.style.background = 'none'
    sign_Container.style.zIndex = '1'
    var log_Container = document.getElementById('log-in-form')
    log_Container.style.opacity = '30%'
}

// function for close signup conatiner. 
window.closeSignUp = function () {
    var sign_Container = document.getElementById('sign-up-form')
    var log_Container = document.getElementById('log-in-form')
    sign_Container.style.display = 'none'
    log_Container.style.opacity = 'unset'
    location.reload();
}

// --------------------- firebase function starts here ---------------------.

import { signInFirebase, logInFirebase } from './firebase/config.js'

//-------------- sign-in function --------------.
window.signIn = async function () {
    // get values from inputs
    var name = document.getElementById('name').value
    var address = document.getElementById('address').value
    var gender = document.getElementById('gender').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    //call the signInFirebase function.
    console.log('signInFirebase function call ...')
    await signInFirebase({ name, address, gender, email, password })
    console.log('signInFirebase function End.')
    // window.location.href = 'login.html'
    console.log(`function run and gone to config.js, name ----- ( ${name} ) , address ----- ( ${address} ) , gender ----- ( ${gender} ) , email ----- ( ${email} ) , password ----- ( ${password} ) .`)
}
//-------------- sign-in function --------------.





// ------------- log-in function ---------------.
window.logIn = function () {
    // get values from inputs
    var l_email = document.getElementById('l-email').value
    var l_password = document.getElementById('l-password').value

    //call the logInFirebase function.
    console.log('logInFirebase function call ...')
    logInFirebase(l_email, l_password)
    console.log(`function run and gone to config.js, email ---- ( ${l_email} ) , password ----- ( ${l_password} ).`)
}
// ------------- log-in function ---------------.



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx End code xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

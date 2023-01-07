
// back to index page function.
window.back = function () {
    window.location.href = 'index.html'
}

// --------------------- firebase function starts here ---------------------.
import { postAdToDb, uploadImage } from './firebase/config.js'

// post advertise function.
window.post = async function () {
    // get values in ad-post form.
    var title = document.getElementById('title').value
    var price = document.getElementById('price').value
    var description = document.getElementById('description').value
    var image = document.getElementById('file').files[0]

    try {
        //call the uploadImage function.
        const imageUrl = await uploadImage(image)
        console.log('imageUrl ===> ', imageUrl)
        //call the postAdToDb function.
        postAdToDb({ title, price, description }, imageUrl)
        alert("Successfully Add Product");
    }
    catch (error) {
        console.log('error.message ===> ', error.message)
    }

    console.log(`\n title ===>  ${title} \n price ===> ${price} \n description ===> ${description} \n file ===> ${image}`)

    // clear the input fields.
    document.getElementById('title').value = '';
    document.getElementById('price').value = '';
    document.getElementById('description').value = '';
    document.getElementById('file').value = '';
}

// ---------------------------- End code. --------------------------------

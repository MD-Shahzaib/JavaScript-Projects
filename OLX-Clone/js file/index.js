// function for goto ad post.html
window.createAdd = function () {
    window.location.href = 'ad post.html'
}

// function for goto ad myads.html
window.myAds = function () {
    window.location.href = 'myads.html'
}

// --------------------- firebase function starts here ---------------------.
import { getAdsTodb } from './firebase/config.js'


// call the showAds function.
showAds()

// function for show ads in (myads.html) dynamically.
async function showAds() {
    const ads = await getAdsTodb()
    const adsDiv = document.getElementById('card-myads-page')
    for (let item of ads) {
        adsDiv.innerHTML += `
            <li>
                <div class="card" onclick="detailPage('${item.id}')" >
                    <img src="${item.imageUrl}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-price">${item.price}</p>
                        <p class="card-text">${item.description}.</p>
                    </div>
                </div>
            </li>
        `}
}

window.detailPage = function (id) {
    window.location.href = `../detail.html?id=${id}`
}

// --------------------- firebase function ends here ---------------------.
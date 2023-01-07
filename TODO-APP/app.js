// addItem function
function addItem() {

    // get elements
    var input = document.getElementById('Input')
    var list = document.getElementById('List')

    // li Creation
    var item = document.createElement('li')
    item.innerHTML = input.value


    // update button Creation
    var update = document.createElement('button')
    update.innerHTML = 'Update'
    update.setAttribute('onclick', 'updateItem(event)')



    // delete button Creation
    var delBtn = document.createElement('button')
    delBtn.innerHTML = 'Delete'
    delBtn.setAttribute('onclick', 'deleteItem(event)')


    // edit button Creation
    var editBtn = document.createElement('button')
    editBtn.innerHTML = 'Edit'
    editBtn.setAttribute('onclick', 'editItem(event)')


    // add elements
    list.appendChild(item)
    item.appendChild(delBtn)
    item.appendChild(editBtn)

    input.value = ''
}


// delete function
function deleteItem(event) {
    var li = event.target.parentElement
    var ul = li.parentElement
    ul.removeChild(li)
}


// edit function
function editItem(event) {
    var li = event.target.parentElement
    var val = li.childNodes[0].nodeValue
    var input = document.getElementById('Input')
    input.value = val

    // change btns
    var btn = document.getElementsByTagName('button')
    var addBtn = btn[0]
    var updateBtn = btn[1]

    addBtn.style.display = 'none'
    updateBtn.style.display = 'inline'

    // 
    editElement = li
}


// Update function
function updateItem() {

    var input = document.getElementById('Input')
    editElement.childNodes[0].nodeValue = input.value


    input.value = ''

    // change btns
    var btn = document.getElementsByTagName('button')
    var addBtn = btn[0]
    var updateBtn = btn[1]

    addBtn.style.display = 'inline'
    updateBtn.style.display = 'none'

}

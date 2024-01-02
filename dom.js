function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;


    let obj = {
        name,
        email,
        phone
    };

    axios.post("http://localhost:3000/users/addUser", obj)
        .then(respond => showNewUserOnScreen(respond.data))
        .catch(err => console.log(err));


    document.getElementById('bookingForm').reset();


}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("http://localhost:3000/users/getUsers")
        .then((respond) => {

            for (var i = 0; i < respond.data.length; i++) {
                showNewUserOnScreen(respond.data[i]);
            }
        })
        .catch(err => console.log(err));
});


function deleteItem(e) {

    var li = e.target.parentElement;
    var liContent = li.innerText;
    const str = liContent.split("-");
    var email = str[1].trim();

    const obj = {
        email: email
    }

    axios.post(`http://localhost:3000/users/deleteUser`, obj)
        .then((response) => {
            var list = document.getElementById('listCon');
            list.removeChild(li);
        })
        .catch(errorMessage => {
            console.log(errorMessage);
        });

}

function showNewUserOnScreen(obj) {

    var name = obj.name;
    var email = obj.email;
    var phone = obj.phone;

    var val = name + ' - ' + email + ' - ' + phone;

    var list = document.getElementById('listCon');

    var li = document.createElement('li');
    li.appendChild(document.createTextNode(val));

    var editBtn = document.createElement('button');
    editBtn.href = 'http://localhost:3000/users/editUser/?edit=true';
    editBtn.onclick = editItem;
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.style.marginLeft = '7px';
    li.appendChild(editBtn);

    var deleteBtn = document.createElement('button');
    deleteBtn.onclick = deleteItem;
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.style.marginLeft = '7px';
    li.appendChild(deleteBtn);

    li.style.padding = '5px';
    list.appendChild(li);

}


function editItem(e) {

    var li = e.target.parentElement;
    var liContent = li.innerText;
    const str = liContent.split("-");
    var email = str[1].trim();


    axios.get(`http://localhost:3000/users/editUser/${email}`)
        .then(result => {
            const data = result.data;
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var phone = document.getElementById('phone');

            name.value = data.name;
            email.value = data.email;
            phone.value = data.phone;

            deleteItem(e);
        })
        .catch(err => console.log(err));

}
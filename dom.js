function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    let obj = {
      name,
      email,
      phone
    };

    axios.post("https://crudcrud.com/api/41f8698466ec4b85a91d43d96c88aff7/appointmentData",obj)
        .then(respond => showNewUserOnScreen(respond.data))
        .catch(err => console.log(err));

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/41f8698466ec4b85a91d43d96c88aff7/appointmentData")
        .then((respond) => {

            for(var i=0;i<respond.data.length;i++){
                showNewUserOnScreen(respond.data[i]);
            }
        })
        .catch(err => console.log(err));
    });


function deleteItem(e){
    if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        var liContent = li.innerText;
        const str = liContent.split("-");
        var email = str[1].trim();

        deletePromise(email)
        .then((response) => {
            // console.log(response);
            var list = document.getElementById('listCon');
            list.removeChild(li);
        })
        .catch(errorMessage => {
            console.log(errorMessage);
        });
    }
}

function deletePromise(email) {
    return new Promise((resolve, reject) => {
        
        axios.get('https://crudcrud.com/api/41f8698466ec4b85a91d43d96c88aff7/appointmentData', {
            params: {email}
        })
        .then(response => {
            const foundUser = response.data[0];

            if (foundUser) {
                
                const userIdToDelete = foundUser._id;

                axios.delete(`https://crudcrud.com/api/41f8698466ec4b85a91d43d96c88aff7/appointmentData/${userIdToDelete}`)
                    .then(deleteResponse => {
                        resolve(deleteResponse);
                    })
                    .catch(deleteError => {
                        reject(`Error deleting user: ${deleteError}`);
                    });
            } else {
                reject(`User with name ${email} not found.`);
            }
        })
        .catch(error => {
            reject(`Error searching for user: ${error}`);
        });
    });
}

function showNewUserOnScreen(obj){

    var name = obj.name;
    var email = obj.email;
    var phone = obj.phone;
        
    var val = name+' - '+email+' - '+phone;
                
    var list = document.getElementById('listCon');
        
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(val));
        
    var editBtn = document.createElement('button');
    editBtn.onclick = editItem;
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.style.marginLeft='7px';
    li.appendChild(editBtn);
                
    var deleteBtn = document.createElement('button');
    deleteBtn.onclick = deleteItem;
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.style.marginLeft='7px';
    li.appendChild(deleteBtn);
        
    li.style.padding = '5px';
    list.appendChild(li);

}


function editItem(e){
    var li = e.target.parentElement;
    var liContent = li.innerText;
    const str = liContent.split("-");
    
    var email = str[1].trim();

    deletePromise(email)
        .then((response) => {
            // console.log(response);
            var list = document.getElementById('listCon');
            list.removeChild(li);

            var name  = document.getElementById('name');
            var email  = document.getElementById('email');
            var phone  = document.getElementById('phone');

            name.value = str[0].trim();
            email.value = str[1].trim();
            phone.value = str[2].replace("EditDelete","");

        })
        .catch(errorMessage => {
            console.log(errorMessage);
        });


}
function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    let obj = {
      name,
      email,
      phone
    };

    axios.post("https://crudcrud.com/api/27be5d3cc75743f98ab4a2af5e87337f/appointmentData",obj)
        .then(respond => showNewUserOnScreen(respond.data))
        .catch(err => console.log(err));

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/27be5d3cc75743f98ab4a2af5e87337f/appointmentData")
        .then((respond) => {

            for(var i=0;i<respond.data.length;i++){
                showNewUserOnScreen(respond.data[i]);
            }
        })
        .catch(err => console.log(err));
    });


function deleteItem(e){
    // if(confirm('Are You Sure?')){
    //     var li = e.target.parentElement;
    //     var liContent = li.innerText;
    //     const str = liContent.split("-");
    //     var key = str[1].trim();

    //     var list = document.getElementById('listCon');
    //     list.removeChild(li);       
        
    //     localStorage.removeItem(key);
    // }
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
    // var li = e.target.parentElement;
    // var liContent = li.innerText;
    // const str = liContent.split("-");
    
    // var key = str[1];

    // var list = document.getElementById('listCon');
    // list.removeChild(li);       
        
    // localStorage.removeItem(key);

    // var name  = document.getElementById('name');
    // var email  = document.getElementById('email');

    // name.value = str[0].trim();
    // email.value = str[1].trim();
}
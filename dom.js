function submitForm(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    let obj = {
      name,
      email
    };

    axios.post("https://crudcrud.com/api/27be5d3cc75743f98ab4a2af5e87337f/appointmentData",obj)
        .then(respond => console.log(respond.data))
        .catch(err => console.log(err));
    
    // refresh();

}
// function deleteItem(e){
//     if(confirm('Are You Sure?')){
//         var li = e.target.parentElement;
//         var liContent = li.innerText;
//         const str = liContent.split("-");
//         var key = str[1].trim();

//         var list = document.getElementById('listCon');
//         list.removeChild(li);       
        
//         localStorage.removeItem(key);
//     }
// }
// function refresh(){

//     removeAll();

//     for (const key of Object.keys(localStorage)) {
//         var email = key;

//         var obj_deserialized = JSON.parse(localStorage.getItem(key));

//         var name = obj_deserialized.name;

//         var val = name+' - '+email;
        
//         var list = document.getElementById('listCon');

//         var li = document.createElement('li');
//         li.appendChild(document.createTextNode(val));

//         var editBtn = document.createElement('button');
//         editBtn.onclick = editItem;
//         editBtn.appendChild(document.createTextNode('Edit'));
//         editBtn.style.marginLeft='7px';
//         li.appendChild(editBtn);
        
//         var deleteBtn = document.createElement('button');
//         deleteBtn.onclick = deleteItem;
//         deleteBtn.appendChild(document.createTextNode('Delete'));
//         deleteBtn.style.marginLeft='7px';
//         li.appendChild(deleteBtn);

        

//         li.style.padding = '5px';
//         list.appendChild(li);
    
        
//     }
// }

// function removeAll(){
//     var list = document.getElementById('listCon');

//     while(list.firstChild){
//         list.removeChild(list.firstChild);
//     }
// }

// function editItem(e){
//     var li = e.target.parentElement;
//     var liContent = li.innerText;
//     const str = liContent.split("-");
    
//     var key = str[1];

//     var list = document.getElementById('listCon');
//     list.removeChild(li);       
        
//     localStorage.removeItem(key);

//     var name  = document.getElementById('name');
//     var email  = document.getElementById('email');

//     name.value = str[0].trim();
//     email.value = str[1].trim();
// }
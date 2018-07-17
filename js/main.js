var contact = [
    { 
     "name":"narayana",
    "email":"narayana@gmail.com",
    "mobile":"9535088521"
        
    },
    {
    "name":"babu",
    "email":"babu@gmail.com",
    "mobile":"95665325"
        
    },
    {
     "name":"ganesh",
    "email":"ganesh@gmail.com",
    "mobile":"9535654521"
    
    }
    ];
function addContact(){
    contacts=getcontacts();
    
    contact.push(contacts);
     clearFormData();
    viewData();
}
function viewData() {
    var data = "";
    data +="<table>"
    for(var i = 0; i < contact.length; i++){
        data +="<tr>";
        data +="<td>"+contact[i].name+"</td>";
        data +="<td>"+contact[i].email+"</td>";
        data +="<td>"+contact[i].mobile+"</td>";
        data += "<td><button onclick=deleteContact(" + i + ")>delete</button>";
        data += "<td><button onclick=editContact(" + i + ")>edit</button>";
        data += "</tr>";
    }
    data += "</table>";
    document.getElementById("content").innerHTML = data;
}
function deleteContact(index){
    contact.splice(index,1);
    viewData();
}
viewData();
function editContact(index){
    contacts=contact[index];
    tempIndex = index;
     document.getElementById('cname').value=contacts.name;
     document.getElementById('mobile').value=contacts.mobile;
     document.getElementById('email').value=contacts.email;
    
    document.getElementById("add").style.display="none";
    document.getElementById("update").style.display="block";
}
function updateContact(){
  contacts = getcontacts();
    contact.splice(tempIndex,1,contacts);
    clearFormData();
    document.getElementById("add").style.display="block";
    document.getElementById("update").style.display="none";
viewData()
}
function clearFormData(){
    document.getElementById("cname").value = '';
    document.getElementById("email").value = '';
    document.getElementById("mobile").value = '';
}
function getcontacts(){
     var cname = 
    document.getElementById("cname").value;
     var email= 
    document.getElementById("email").value;
     var mobile = 
    document.getElementById("mobile").value;
    contacts = {
        "name":cname,
        "email":email,
        "mobile":mobile
    }
    return contacts;
     
}
    



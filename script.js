var data = '';

fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(json => {

    data = json;

    for(var index =0; index<data.length; index++) {


    var tempDiv = document.createElement('div');
    
    var postId = document.createElement('label');
    postId.innerText = "postId: "+ data[index].postId;
    tempDiv.append(postId);
    var newLine = document.createElement('br');
    tempDiv.append(newLine);
// ---------------------

var id = document.createElement('label');
id.innerText = "id: "+ data[index].id;
tempDiv.append(id);
var newLine = document.createElement('br');
tempDiv.append(newLine);

// ------------------------
    var name = document.createElement('label');
    name.innerText = "name: "+ data[index].name;
    tempDiv.append(name);
    var newLine = document.createElement('br');
    tempDiv.append(newLine);
// ------------------------
    
var email = document.createElement('label');
email.innerText = "email: "+ data[index].email;
tempDiv.append(email);
var newLine = document.createElement('br');
tempDiv.append(newLine);


    tempDiv.setAttribute("style","background-color: orange; margin: 7px; padding: 3px; border: 2px solid black;")
    document.getElementById('mainDiv').append(tempDiv);
}

  })
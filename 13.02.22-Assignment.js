// var entry = document.getElementById("entry")
// entry.addEventListener("click",Signup); 

// var row = 1;

// function Signup() {
//     var username = document.getElementById("puser").value;
//     var password = document.getElementById("pass").value;
//     var email = document.getElementById("email").value;
//     var dob = document.getElementById("dob").value;
//     var address = document.getElementById("address").value;

//     var display = document.getElementById("display");

//     var newRow = document.getinsertRow(row);

//     var cell1 = newRow.insertCell(0);
//     var cell2 = newRow.insertCell(1);
//     var cell3 = newRow.insertCell(2);
//     var cell4 = newRow.insertCell(3);
//     var cell5 = newRow.insertCell(4);


//     cell1.innerHTML = username;
//     cell2.innerHTML = password;
//     cell3.innerHTML = email;
//     cell4.innerHTML = dob;
//     cell5.innerHTML = address;

//     row++;
// }



function Signup() 
{
   var print1 = document.getElementById("user");
   var print2 = document.getElementById("pass");
   var print3 = document.getElementById("email");
   var print4 = document.getElementById("dob");
   var print5 = document.getElementById("address");


   var username = document.getElementById("printusername");
   var password = document.getElementById("printpassword");
   var email = document.getElementById("printuseremail");
   var dob = document.getElementById("printuserdob");
   var address = document.getElementById("printuseraddress");

   username.innerHTML = print1.value;
   password.innerHTML = print2.value;
   email.innerHTML = print3.value;
   dob.innerHTML = print4.value;
   address.innerHTML = print5.value;

   console.log(print1.value);
   


}



// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         document.getElementById("lecturerlogin").style.display = "initial";
//     } else {
//         document.getElementById("lecturerlogin").style.display = "none";}
//   });


// function loginlecturer(){
    
//     var userlecturer = document.getElementById("usernamelecturer").value;
//     var passlecturer = document.getElementById("passwordlecturer").value;

    
// firebase.auth().signInWithEmailAndPassword(userlecturer, passlecturer)
// .then(function() {
//     // window.location.href = "./dashboard/pages/index.html?username=" + userlecturer;
// })
// .catch(function(error) {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;  
//         window.alert("Error : " + errorMessage);
//         // ...
//       });
    

// }

function loginadmin(){
    window.alert("working");
}


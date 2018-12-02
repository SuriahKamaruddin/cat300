<<<<<<< HEAD


=======
var add_code = document.getElementById("addcode").value;
var add_name = document.getElementById("addname").value;
>>>>>>> b5687897f1d789f4161d9c9baff03375a098dd73
    
    var rootref=firebase.database().ref().child("class");
    
    rootref.on("child_added",snap=>{
        console.log("jjj");
     var code = snap.child("classcode").val(); 
   
     var name= snap.child("classname").val();
    
     $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
     $("#classoption").append("<option>"+ code +" " + name + "<option>");
     
    });
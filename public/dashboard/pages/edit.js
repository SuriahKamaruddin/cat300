

    // var rootRef = firebase.database().ref().child("class");

    // rootRef.on("child_added",snap =>{
    //     alert(snap.val());

    //     var code = snap.child("classcode").val();
    //     var name = snap.child("classname").val();

    //     var table = document.getElementById("table_body");

    //     var row = table.insertRow(0);
    
    //     var cell1 = row.insertCell(0);
    
    //     var cell2 = row.insertCell(1);
      
    //     cell1.innerHTML = code;
    
    //     cell2.innerHTML = name;
    //     $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
    // });
    
    var rootref=firebase.database().ref().child("class");
    
    rootref.on("child_added",snap=>{
        console.log("jjj");
     var code = snap.child("classcode").val(); 
   
     var name= snap.child("classname").val();
    
     $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
     $("#classoption").append("<option>"+ code +" " + name + "<option>");
     
    });
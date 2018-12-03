
    var rootref=firebase.database().ref().child("ClassSession");
    
    rootref.on("child_added",snap=>{
        console.log("jjj");
        
        
     var code = snap.child("classcode").val(); 
   
     var name= snap.child("classname").val();
    
     $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
     $("#classoption").append("<option>"+ code +" " + name + "<option>");
     
    });



    function addclass(){
        // $("#table_body").remove();
        // $("#classoption").remove();

        var add_code = document.getElementById("addcode").value;
        var add_name = document.getElementById("addname").value;

        var addCourse=firebase.database().ref().child('ClassSession/'+add_code);
        /* Save and update data */
        addCourse.set({
            classname: add_name
        });
    }
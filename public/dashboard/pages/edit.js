
    var rootref=firebase.database().ref().child("class");
    
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
        var addCourse=firebase.database().ref().child('class/class4');

        var add_code = document.getElementById("addcode").value;
        var add_name = document.getElementById("addname").value;
        
        /* Save and update data */
        addCourse.set({
            classcode: add_code,
            classname: add_name
        });
    }
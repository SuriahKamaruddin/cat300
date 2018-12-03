
    var rootref=firebase.database().ref().child("Class");

    rootref.on("value", snap => {
        snap.forEach(function(itemSnapshot) {
          var code= itemSnapshot.key;
          var courseName= rootref.child(code).child("classname");

          courseName.once("value")
          .then((snap2)=> {
              var name= snap2.val();
              console.log(code+ " " +name);
              $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button >Delete</button></td></tr>");
              //$("#classoption2").append("<option>"+ code +" " + name + "</option>");
          });

        });
    });
    
    function addclass(){
        location.reload();

        var add_code = document.getElementById("addcode").value;
        var add_name = document.getElementById("addname").value;

        var addCourse=firebase.database().ref().child('Class/'+add_code);
        
        /* Save and update data */
        addCourse.set({
            classname: add_name
        });
    }
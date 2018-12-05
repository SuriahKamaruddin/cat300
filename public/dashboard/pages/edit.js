
    var rootref=firebase.database().ref().child("Class");

    rootref.on("value", snap => {
        snap.forEach(function(itemSnapshot) {
          var code= itemSnapshot.key;
          var courseName= rootref.child(code).child("classname");

          courseName.once("value")
          .then((snap2)=> {
              var name= snap2.val();
              console.log(code+ " " +name);
            //   $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
              $("#addcode").append("<option>"+ code +" " + name + "</option>");

          });

        });
    });
    
    // function addclass(){
    //     location.reload();

    //     var add_code = document.getElementById("addcode").value;

    //     var addCourse=firebase.database().ref().child('Lecturer/CoursesTeach'+add_code);
        
    //     /* Save and update data */
    //     addCourse.set({
    //         CoursesTeach: add_name
    //     });
    // }

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            var id=user.uid;}

            var rootref=firebase.database().ref().child("Lecturer").child(id).child("CoursesTeach");

            rootref.on("value", snap => {
                snap.forEach(function(itemSnapshot) {
                var code= itemSnapshot.key;
                // var courseName= rootref.child(code).child("CoursesTeach");

                var rootref2=firebase.database().ref().child("Class").child(code).child("classname");

                // rootref2.on("value", snap => {
                //     snap.forEach(function(itemSnapshot) {
                //         // var code= itemSnapshot.key;
                            // var courseName= rootref2.child(code).child("classname");

                        rootref2.once("value")
                        .then((snap2)=> {
                            var name= snap2.val();
                            console.log(code+ " " +name);
                            //   $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
                            $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");

                        });

                //     });
                // });

                

                // courseName.once("value")
                // .then((snap2)=> {
                //     var name= snap2.val();
                //     console.log(id+ " " +name);
                //       $("#table_body").append("<tr><td>"+ code +"</td><td>"+ name + "</td><td><button>Delete</button></td></tr>");
                //     // $("#addcode").append("<option>"+ id +" " + name + "</option>");

                // });

                });
            });

            
        });

        // function addclass(){
        

        //         firebase.auth().onAuthStateChanged(function(user) {
        //             if (user) {
        //             var id=user.uid;}
        //             var add_code = document.getElementById("addcode").value;
        
        //             var addCourse=firebase.database().ref().child('Lecturer').child(id).child('CoursesTeach' +add_code);
            
        //              /* Save and update data */
        //                 addCourse.set({
        //                  CoursesTeach: add_code
        //                  });
        //             });
        //         }


    function addclass(){
        location.reload();
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                var id=user.uid;
            
                var add_code = document.getElementById("addcode").value;
                var splt = add_code.split(" ");
                var addCourse=firebase.database().ref().child("Lecturer").child(id).child("CoursesTeach").child(splt[0]);
                
                /* Save and update data */
                addCourse.set("Active");
            }
            });
      

        
    }
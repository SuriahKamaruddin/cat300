// var QRCode = require("./qrcode.js");
function generatecode() {
    var classType = document.getElementById("classoption").value;
    var classCode = document.getElementById("classoption2").value;
    var date = document.getElementById("lecturedate").value;
    var time = document.getElementById("lecturetime").value;

    var qrcode = new QRCode(document.getElementById('qrcode'), {
        width: 300,
        height: 300,

    });

    var count = 0;

    var n = Math.ceil(Math.random() * 1000);
    var rootStr= classCode+"_"+classType+"_"+date+"_"+time;
    var str = classCode+"_"+classType+"_"+date+"_"+time + "_" + n;
    //var str = classCode+"_"+classType+"_"+date+"_"+time;

    var addQRVal=firebase.database().ref().child('Class/'+classCode+'/ClassSession/'+rootStr);
        
    /* Save and update data */
    addQRVal.set({
        CurrentQRValue:str
    });

    qrcode.makeCode(str);
    count++;
    var generate = setInterval(function(){
        n = Math.ceil(Math.random() * 1000);
        
        str = classCode+"_"+classType+"_"+date+"_"+time + "_" + n;

        var resetQRVal=firebase.database().ref().child('Class/'+classCode+'/ClassSession/'+rootStr);
        
        /* Save and update data */
        resetQRVal.update({
            CurrentQRValue:str
        });

        qrcode.makeCode(str);
        console.log(str)
        count++;

        if(count === 6) {
            clearInterval(generate)
            console.log("done");
            document.getElementById('qrcode').innerHTML = "";
        }
    }, 10000);


    

    // var typeNumber = 4;
    // var errorCorrectionLevel = 'L';
    // var qr = qrcode(typeNumber, errorCorrectionLevel);
    // qr.addData('Hi!');
    // qr.make();
    // document.getElementById('qrcode').innerHTML = qr.createImgTag();
}

// function addattendance(){
//     var lecture = document.getElementById("classoption").value;
//     var date = document.getElementById("lecturedate").value;
//     var time = document.getElementById("lecturetime").value;
//     var matric = document.getElementById("matricnumber").value;
//     console.log(lecture+"_"+date+"_"+time+"_"+matric);
// }
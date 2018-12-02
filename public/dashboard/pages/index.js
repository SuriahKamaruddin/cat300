// var QRCode = require("./qrcode.js");
function generatecode() {
    var lecture = document.getElementById("classoption").value;
    var date = document.getElementById("lecturedate").value;
    var time = document.getElementById("lecturetime").value;
    console.log(lecture);

    

    var qrcode = new QRCode(document.getElementById('qrcode'), {
        width: 300,
        height: 300,

    });

    var count = 0;

    var n = Math.ceil(Math.random() * 1000);
    var str = lecture+"_"+date+"_"+time + "_" + n;
    qrcode.makeCode(str);
    count++;
var generate = setInterval(function(){
    n = Math.ceil(Math.random() * 1000);
    str = lecture+"_"+date+"_"+time + "_" + n;
    qrcode.makeCode(str);
    console.log(str)
    count++;

    if(count === 5) {
        clearInterval(generate)
        console.log("done");
        document.getElementById('qrcode').innerHTML = "";
    }
}, 5000);


    

    // var typeNumber = 4;
    // var errorCorrectionLevel = 'L';
    // var qr = qrcode(typeNumber, errorCorrectionLevel);
    // qr.addData('Hi!');
    // qr.make();
    // document.getElementById('qrcode').innerHTML = qr.createImgTag();
}

function addattendance(){
    var lecture = document.getElementById("classoption").value;
    var date = document.getElementById("lecturedate").value;
    var time = document.getElementById("lecturetime").value;
    var matric = document.getElementById("matricnumber").value;
    console.log(lecture+"_"+date+"_"+time+"_"+matric);
}
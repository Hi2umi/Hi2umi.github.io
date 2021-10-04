// JavaScript Document
function disptime(){
    var today=new Date();
    var hh=today.getHours();
    var mm=today.getMinutes();
    var ss=today.getSeconds();
    document.getElementById("clock").innerHTML="都"+hh+":"+mm+":"+ss+"了，该睡觉啦！";
}
setInterval("disptime()",1000);

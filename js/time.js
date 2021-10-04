// JavaScript Document
function disptime(){
    var today=new Date();
    var hh=today.getHours();
    var mm=today.getMinutes();
    var ss=today.getSeconds();
    document.getElementById("clock").innerHTML="现在的时间："+hh+":"+mm+":"+ss;
    document.write("<h1>中文</h1>");
}
setInterval("disptime()",1000);

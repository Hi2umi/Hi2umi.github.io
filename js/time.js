// JavaScript Document
function disptime(){
    var today=new Date();
    var hh=today.getHours();
    var mm=today.getMinutes();
    var ss=today.getSeconds();
    document.getElementById("clock").innerHTML="���ڵ�ʱ���ǣ�"+hh+":"+mm+":"+ss;
}
setInterval("disptime()",1000);
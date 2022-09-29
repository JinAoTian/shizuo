window.oncontextmenu = function(e){
    //取消默认的浏览器自带右键
    e.preventDefault();
} 
window.onclick=function(e){
    document.getElementById('iconMenu').style.display="none";
    document.getElementById('windowMenu').style.display="none";
    document.getElementById('pageMenu').style.display="none";
}
window.onbeforeunload = function(){
    $ .ajax({
        url : "http://localhost:3000/saveData",
        type : "get",
        });
} 
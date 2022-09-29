function changeCover(){
    document.getElementById("cover").style.backdropFilter = "blur(5px)"
    document.getElementById("bgimg").style.backgroundSize = "105%"
}

// cover.onmouseup = function(e){
//     if(e.button == 2){
//         var menu=document.getElementById('windowMenu');
//         menu.style.left=e.clientX+'px';
//         menu.style.top=e.clientY+'px';
//         menu.style.display = "block";
//     }
// }
var cover = document.getElementById("cover").addEventListener(
    'mouseup',function(e){
            if(e.button == 2){
                var menu=document.getElementById('windowMenu');
                menu.style.left=e.clientX+'px';
                menu.style.top=e.clientY+'px';
                menu.style.display = "block";
            }
    }
);
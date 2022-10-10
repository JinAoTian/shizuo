var iconUl = document.getElementById("iconUl");
var iconNum =0;
var editID = 0;
var editTitle ="";
var editURL ="";
var editPage ="0";
var updateIconLock = 0;


//添加链接
function iconSubmit(){
    var iconURL=document.getElementById("iconURL").value;
    var iconTitle=document.getElementById("iconTitle").value;
    var iconImg = getIconImg(iconURL);
    if(iconTitle == ""){iconTitle="自动获取";}
    creatIcon(iconImg,iconTitle,iconURL,iconNum++);
    pushIcon(iconImg,iconTitle,iconURL);
}
// 去除上次的数据
function iconClose(){
    document.getElementById("iconURL").value = "";
    document.getElementById("iconTitle").value = "";
}
function iconClose2(){
    document.getElementById("iconURL2").value =editURL;
    document.getElementById("iconTitle2").value =editTitle;
    document.getElementById("iconURL2").setAttribute("placeholder",editURL);
    document.getElementById("iconTitle2").setAttribute("placeholder",editTitle);
}
//生成图标
function creatIcon(iconImg,iconTitle,iconURL,iconID){
    var iconLi = document.createElement("li");
    var iconLiDiv = document.createElement("div");
    var iconLiDivImg = document.createElement("img");
    var iconLiP = document.createElement("p");
    iconLi.setAttribute('id','iconID'+iconID);
    iconLiDiv.classList.add("icon_block");
    iconLiDivImg.setAttribute('src',iconImg);
    iconLiDivImg.setAttribute('alt',iconTitle);
    iconLiP.innerHTML = iconTitle;
    iconLiDiv.appendChild(iconLiDivImg);
    iconLi.appendChild(iconLiDiv);
    iconLi.appendChild(iconLiP);
    var iconDiv=iconLi.getElementsByClassName("icon_block")[0];
    iconDiv.addEventListener(
        'mouseup',function(e){
            if(e.button == 0){
                window.open(iconURL,"_blank");
            }
            if(e.button == 2){
                var menu=document.getElementById('iconMenu');
                menu.style.left=e.clientX+'px';
                menu.style.top=e.clientY+'px';
                menu.style.display = "block";
                editID = iconID;
                editTitle = iconTitle;
                editURL = iconURL;
                e.stopPropagation();
            }
        }
    )
    var addLi = iconUl.lastElementChild;
    iconUl.appendChild(iconLi);
    iconUl.appendChild(addLi);
}
function iconEdit(){
    var iconURL=document.getElementById("iconURL2").value;
    var iconTitle=document.getElementById("iconTitle2").value;
    var DIcon = document.getElementById("iconID"+editID);
    var DDiv = document.createElement('div');
    var DImg = document.createElement('img');
    var DP = DIcon.getElementsByTagName("p")[0];
    if(iconURL==""){iconURL=editURL;}
    if(iconTitle==""){iconTitle=editTitle;}
    var iconImg = getIconImg(iconURL);
    DImg.setAttribute('src',iconImg);
    DImg.setAttribute('alt',iconTitle);
    DP.innerHTML = iconTitle;
    DDiv.appendChild(DImg);
    DDiv.classList.add("icon_block");
    DDiv.addEventListener(
        'mouseup',function(e){
            if(e.button == 0){
                window.open(iconURL,"_blank");
            }
            if(e.button == 2){
                var menu=document.getElementById('iconMenu');
                menu.style.left=e.clientX+'px';
                menu.style.top=e.clientY+'px';
                menu.style.display = "block";
                editID = iconID;
                editTitle = iconTitle;
                editURL = iconURL;
                e.stopPropagation();
            }
        }
    )
    DIcon.replaceChild(DDiv,DIcon.firstChild);
    $.ajax({
        url : BackURL+"editIcon?iconImg="+iconImg+"&iconTitle="+iconTitle+"&iconURL="+iconURL+"&id="+editID+"&pageID="+editPage,
        type : "get",
    });
}

function getIconImg(iconURL){
    if(iconURL[0] =="w"){iconURL = "https://"+iconURL;}
    var iconImg = iconURL.split("/"); //以“/”进行分割
    if( iconImg[2] ) {
        iconImg = "https://"+iconImg[2]+"/favicon.ico";
    } else {
        iconImg = iconURL+"/favicon.ico"; 
    }
    return iconImg;
}
// 加载网页时，默认加载图标
//http://localhost:3000/
function updateIcon(pageID){
    if(updateIconLock == 1){console.log(1);return;}
    updateIconLock = 1;
    for(var i=0;i<iconNum;i++){
        iconUl.removeChild(document.getElementById("iconID"+i));
    }
    pageChose(pageID);
    $ .ajax({
        url : BackURL+"updateIcon?pageID="+pageID,
        dataType : "json",
        type : "get",
        success : function(data) {
            editPage = pageID;
            for(var i=0;i<data.length;i++)
            {
                creatIcon(data[i].iconImg,data[i].iconTitle,data[i].iconURL,i);
            }
            iconNum = data.length;
            updateIconLock = 0;
        },
        err:function(){
            alert(错误);
        }
        });
}
function pushIcon(iconImg,iconTitle,iconURL){
    $ .ajax({
        url : BackURL+"pushIcon?iconImg="+iconImg+"&iconTitle="+iconTitle+"&iconURL="+iconURL+"&pageID="+editPage,
        type : "get",
        });
}
function deleteIcon(){
    var DIcon = document.getElementById("iconID"+editID);
    iconUl.removeChild(DIcon);
    $ .ajax({
        url : BackURL+"deleteIcon?id="+editID+"&pageID="+editPage,
        type : "get",
        });
}

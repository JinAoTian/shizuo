var SidebarList = document.getElementById("SidebarIconList");
var SidebarAdd = SidebarList.lastElementChild;
var pageNum = 0;
SidebarInit();
windowAddMouseWheel();

//创建一个图标
function creatSidebarIcon(pageName,pageIcon,pageID){
    var SidebarIcon = document.createElement("li");
    var SidebarIconButton = document.createElement("button");
    SidebarIcon.classList.add("nav-item");
    SidebarIconButton.classList.add("SidebarIcon");
    SidebarIconButton.classList.add("fa");
    SidebarIconButton.classList.add(pageIcon);
    SidebarIconButton.innerHTML = pageName;
    SidebarIcon.appendChild(SidebarIconButton);
    SidebarIcon.onmouseup = function(){
        updateIcon(pageID);
    } 
    SidebarList.appendChild(SidebarIcon);
    SidebarList.appendChild(SidebarAdd);
}
//初始化
function SidebarInit(){
    $.ajax({
        url : "http://localhost:3000/getPageList",
        type : "get",
        success : function(data) {
            for(var i=0;i<data.length;i++)
            {
                creatSidebarIcon(data[i].pageName,data[i].pageIcon,i);
            }
            pageNum = data.length;
        }
    });
}

//向上更新
function pageUp(){
    editPage =(editPage + pageNum -1)%pageNum;
    updateIcon(editPage);
}
function pageDawn(){
    editPage =(editPage + 1)%pageNum;
    updateIcon(editPage);
}
//绑定鼠标滚轮 
function windowAddMouseWheel() {
	    var scrollFunc = function (e) {
	        e = e || window.event;
	    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
		    if (e.wheelDelta > 0) { //当滑轮向上滚动时
			    pageDawn();
		    }
		    if (e.wheelDelta < 0) { //当滑轮向下滚动时
		        pageUp();
		    }
	    } else if (e.detail) {  //Firefox滑轮事件
		    if (e.detail> 0) { //当滑轮向上滚动时
			    pageDawn();
		    }
		    if (e.detail< 0) { //当滑轮向下滚动时
                pageUp();
		    }
	    }
	};
				    //给页面绑定滑轮滚动事件
	if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
		document.addEventListener('DOMMouseScroll', scrollFunc, false);
	}
					//其他浏览器直接绑定滚动事件
	window.onmousewheel = document.onmousewheel = scrollFunc;
}
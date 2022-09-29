
var SidebarList = document.getElementById("SidebarIconList");
var SidebarAdd = SidebarList.lastElementChild;
var pageNum = 0;
var ISSL = 0;
var perPage;
var OptPage;
SidebarInit();
windowAddMouseWheel();
//创建一个图标
function creatSidebarIcon(pageName,pageIcon,pageID){
    var SidebarIcon = document.createElement("li");
    var SidebarIconButton = document.createElement("button");
    SidebarIcon.classList.add("nav-item");
    SidebarIconButton.classList.add("fa");
    SidebarIconButton.classList.add(pageIcon);
    SidebarIconButton.classList.add("bg-dark");
    SidebarIconButton.classList.add("text-white");
    SidebarIconButton.classList.add("SidebarIcon");
    SidebarIconButton.innerHTML = pageName;
    SidebarIcon.setAttribute('id','pageID'+pageID);
    SidebarIcon.appendChild(SidebarIconButton);
    SidebarIcon.addEventListener(
        'mouseup',function(e){
            if(e.button == 0){
                updateIcon(pageID);
            }
            if(e.button == 2){
                var menu=document.getElementById('pageMenu');
                menu.style.left=e.clientX+'px';
                menu.style.top=e.clientY+'px';
                menu.style.display = "block";
                OptPage = pageID;
            }
        }
    ) 
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
            perPage = document.getElementById("pageID"+0);
            updateIcon(0);//初始化，导入首页的图标
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
			    pageUp();
		    }
		    if (e.wheelDelta < 0) { //当滑轮向下滚动时
		        pageDawn();
		    }
	    } else if (e.detail) {  //Firefox滑轮事件
		    if (e.detail> 0) { //当滑轮向上滚动时
			    pageUp();
		    }
		    if (e.detail< 0) { //当滑轮向下滚动时
                pageDawn();
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
//给右上图标添加滑动效果
function SidebarIconSl(){
    if(ISSL == 0){
        $("#SidebarIcon").animate({left:'+=70px'})
        ISSL = 1;
        return;
    }
    if(ISSL == 1){
        $("#SidebarIcon").animate({left:'-=70px'})
        ISSL = 0;
    }
}

//选中效果
function pageChose(pageID){
    perPage.classList.replace("bg-light","bg-dark");
    perPage.classList.replace("text-dark","text-white");
    var chosedpage = document.getElementById("pageID"+pageID).getElementsByTagName("button")[0];
    chosedpage.classList.replace("bg-dark","bg-light");
    chosedpage.classList.replace("text-white","text-dark");
    perPage = chosedpage;
}


//添加分页
function addpage(){
    var pageName = document.getElementById("pageName").value;
    var pageIcon = "fa-home";
    $ .ajax({
        url : "http://localhost:3000/addPage?pageName="+pageName+"&pageIcon="+pageIcon,
        type : "get",
    });
    pageNum+=1;
}
//删除分页
function pageDelte(){
    var detPage = document.getElementById("pageID"+OptPage);
    console.log(detPage);
    SidebarList.removeChild(detPage);
    $ .ajax({
        url : "http://localhost:3000/detPage?pageID="+OptPage,
        type : "get",
    });
}
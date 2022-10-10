const search = Vue.createApp({
    data(){
        return {
            selected:'https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd=',
            options:[
                {text:'百度',value:'https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd='},
                {text:'必应',value:'https://cn.bing.com/search?q='},
                {text:'谷歌',value:'https://www.google.com/search?q='},
                {text:'github',value:'https://github.com/search?q='},
                {text:'bilbil',value:'https://search.bilibili.com/all?keyword='},
                {text:'知乎',value:'https://www.zhihu.com/search?q='},
                {text:'网易云',value:'https://music.163.com/#/search/m/?s='},
                {text:'壁纸',value:'https://wallhaven.cc/search?q='},
            ],
            searchText:"",
            fanyiURLs:[
                "https://fanyi.baidu.com/?aldtype=16047#en/zh/" //百度，英转中(其实是带自动检测哒)
            ]
            }
    },
    methods: {
        change:function(){
        },
        search:function(){
            window.open(this.selected+this.searchText);
        },
        update:function(){
            oUl.innerHTML =" ";
            var oScript = document.createElement("script");//动态创建script标签
            if(this.searchText != ""){
                var oLi = document.createElement("li");
                oLi.innerHTML ="译： "+ this.searchText;
                oLi.onclick = function(){
                    window.open(this.fanyiURLs[0]+this.searchText,"_blank");
                }
                oUl.appendChild(oLi);
            }
            oScript.src = "http://suggestion.baidu.com/su?wd="+this.searchText+"&cb=callback";
            document.body.appendChild(oScript);
            document.body.removeChild(oScript);
        }
    },
    created(){
        
    }
})
search.mount("#searchBlock");
let searchAPI = [
    "http://suggestion.baidu.com/su?wd=",//百度
    "http://sg1.api.bing.com/qsonhs.aspx?type=cb&cb=callback&q=",//必应
    "www.google.com/s?hl=zh-cn&sugexp=llsin&q=",//谷歌
]
let nowAPI = searchAPI[0];
var oUl = document.getElementById("SearchList");
// var oBtn = document.getElementById("SearchBtn");
nowURL = "https://www.baidu.com/s?tn=68018901_2_oem_dg&ie=utf-8&wd=";
function callback(data){
    data.s.forEach(function(value){
        var oLi = document.createElement("li");
        oLi.innerHTML =value;
        oLi.onclick = function(){
            window.open(nowURL+ value,"_blank");
        }
        oLi.className ="searchRes";
        if(document.getElementsByClassName("searchRes").length < 12){oUl.appendChild(oLi);}//这里可以放到以后优化一下
       })
       oUl.style.display = "block";
}

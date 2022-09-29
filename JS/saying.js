let sayingAPIsel = [//参考https://abcnull.blog.csdn.net/article/details/108277795?spm=1001.2101.3001.6661.1&utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-108277795-blog-109506062.pc_relevant_multi_platform_featuressortv2dupreplace&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7ECTRLIST%7ERate-1-108277795-blog-109506062.pc_relevant_multi_platform_featuressortv2dupreplace&utm_relevant_index=1
    "https://api.xygeng.cn/one",//one一句
    "https://v1.hitokoto.cn/",//一言网
    "https://saying.api.azwcl.com/saying/get"//未知
]
let sayingAPI = sayingAPIsel[1];//这里返回的data不同，以后要改的话需要适配
var saying = document.getElementById("sayingLine");
$.ajax({
    type: 'get',
    url: sayingAPI,
    dataType: "json",
    success: function (data) {
        //console.log(data);
        saying.innerText = "["+data.hitokoto+"]"; 
    },
    error: function () {}
  });
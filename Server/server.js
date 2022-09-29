//导入 express 模块, npm install express -S
//导入 cors模块, npm install cors -S
const express = require("express")
const cors = require("cors");
const fs = require('fs');
let app = express();
//处理跨域问题
app.use(cors());

// app.get("/getPageList",function(req,res){})
// var str =  JSON.stringify(userdata);
// fs.writeFile('./data/userdata.json',str,function(err){});

//获取用户数据
fs.readFile('./data/userdata.json',function(err,data){
  var userdata = data.toString();
  userdata = JSON.parse(userdata);
  
  //初始化时，获取page列表
  app.get("/getPageList",function(req,res){
    res.send(userdata.page);
  })


  //刷新图标页
  app.get("/updateIcon",function(req,res){
    res.send(userdata.page[req.query.pageID].iconList);
  })

  //添加一个图标
  app.get("/pushIcon",function(req,res){
    userdata.page[req.query.pageID].iconList.push(req.query);
  })

  //修改一个图标
  app.get("/editIcon",function(req,res){
    userdata.page[req.query.pageID].iconList[req.query.id].iconImg = req.query.iconImg;
    userdata.page[req.query.pageID].iconList[req.query.id].iconURL = req.query.iconURL;
    userdata.page[req.query.pageID].iconList[req.query.id].iconTitle = req.query.iconTitle;
  })

  //删除一个图标
  app.get("/deleteIcon",function(req,res){
      userdata.page[req.query.pageID].iconList.splice(req.query.id,1);
  })
  //关闭网页时保存用户数据
  app.get("/saveData",function(req,res){
    var str =  JSON.stringify(userdata);
    fs.writeFile('./data/userdata.json',str,function(err){});
  })

})

//监听3000端口
app.listen(3000 , function () {
  console.log("服务启动成功，请在3000端口进行访问......");
});
//GitHub开源项目  https://github.com/xiazeyu/live2d-widget-models 
let models = [//详细可以参考上面的代码
"https://unpkg.com/live2d-widget-model-shizuku/assets/shizuku.model.json",//志津久 橙发萌娘
"https://unpkg.com/live2d-widget-model-chitose/assets/chitose.model.json",//千岁 制服帅哥
"https://unpkg.com/live2d-widget-model-epsilon2_1/assets/Epsilon2.1.model.json",//ε 伊普西隆 橙发小美女
"https://unpkg.com/live2d-widget-model-gf/assets/Gantzert_Felixander.model.json",//甘茨_菲利克斯 带鹰老人
"https://unpkg.com/live2d-widget-model-haru/01/assets/haru01.model.json",//李夏露 春日 ？ 双马尾少女（女仆装）
"https://unpkg.com/live2d-widget-model-haru/02/assets/haru02.model.json",//李夏露 春日 ？ 双马尾少女（校服）
"https://unpkg.com/live2d-widget-model-haruto/assets/haruto.model.json",//哈鲁托 小可爱（男）
"https://unpkg.com/live2d-widget-model-hibiki/assets/hibiki.model.json",//希比基 少女（水手服） 有点高，注意设置height
"https://unpkg.com/live2d-widget-model-hijiki/assets/hijiki.model.json",//绿野？ 是可爱的小灰猫哒
"https://unpkg.com/live2d-widget-model-izumi/assets/izumi.model.json",//泉
"https://unpkg.com/live2d-widget-model-koharu/assets/koharu.model.json",//小可爱（女） 翻译不来...
"https://unpkg.com/live2d-widget-model-miku/assets/miku.model.json",//初音
"https://unpkg.com/live2d-widget-model-ni-j/assets/ni-j.model.json",//ni-j 
"https://unpkg.com/live2d-widget-model-nico/assets/nico.model.json",//尼科 萌系小狐娘
"https://unpkg.com/live2d-widget-model-nietzsche/assets/nietzche.model.json",//尼采 萌系双马尾
"https://unpkg.com/live2d-widget-model-nipsilon/assets/nipsilon.model.json",//尼普西隆 萌系双马尾2
"https://unpkg.com/live2d-widget-model-nito/assets/nito.model.json",//Nito 萌系2描述不来
"https://unpkg.com/live2d-widget-model-tororo/assets/tororo.model.json",//托罗罗 白猫
"https://unpkg.com/live2d-widget-model-tsumiki/assets/tsumiki.model.json",//津木 绿发少女
"https://unpkg.com/live2d-widget-model-unitychan/assets/unitychan.model.json",//陈统一（doge） 黄发萌系双马尾
"https://unpkg.com/live2d-widget-model-wanko/assets/wanko.model.json",//旺科 碗-狗
"https://unpkg.com/live2d-widget-model-z16/assets/z16.model.json",//z16 最喜欢的
"https://unpkg.com/"//
]
let nowModel = models[21];

L2Dwidget.init({ 
　　"model": {jsonPath:nowModel,"scale": 1 }, 
　　"display": { "position": "right", "width": 150, "height": 200,"hOffset": -20, "vOffset": -20 }, 
　　"mobile": { "show": true, "scale": 0.5 }, 
　　"react": { "opacityDefault": 0.7, "opacityOnHover": 0.2 } 
});
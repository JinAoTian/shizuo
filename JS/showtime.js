const head =Vue.createApp({
    data(){
        return {
          timer: undefined,
          Time: "",
          Data:""
        }
      },
      created() {
        // 显示时间，在渲染页面之前一直调用该函数，对this.time进行赋值
          this.timer = setInterval(() => {
          this.Time= new Date().toLocaleString();
        });
      },
    // 销毁定时器
      beforeDestroy() {
        if (this.timer) {
          clearInterval(this.timer);
        }
      },
      methods: {
        FormatTime() {
          //返回显示的日期时间格式
          var date = new Date();
          var hour = this.formatTime(date.getHours());
          var minute = this.formatTime(date.getMinutes());
          return `${hour}:${minute}`;
        },
        formatTime(n) {
          //判断是否需要加0
          if (n < 10) {
            return "0" + n;
          } else {
            return n;
          }
        },
        FormatData(){

      var date = new Date();
      var year = this.formatTime(date.getFullYear());
      var month = this.formatTime(date.getMonth() + 1);
      var day = this.formatTime(date.getDate());
      var weekday = date.getDay();
      var weeks = new Array(
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六"
      );
      var week = weeks[weekday];
      return `${year}年${month}月${day}日  ${week}`;
        }
    }
  })
head.mount("#head");
/* 使用html5的新方法给页面可以添加多个方法 */
/* 当导航栏scrollTop超出轮播图的高度，背景色变成不透明 */
function update() {
    /* 获取搜索框元素 */
    var header = document.querySelector('#header');
    /* 获取轮播图的高度 */
    var slideHeight = document.querySelector('#slide').offsetHeight;

    window.addEventListener('scroll', function () {
        /* 获取页面滚出去的距离 */
        var h = document.documentElement.scrollTop || document.body.scrollTop;
        header.style.backgroundColor = 'rgb(222, 24, 27,' + h / slideHeight + ')';
    })
}
update();


window.addEventListener('load', function () {
    update(); 

    
    /* 轮播图 */
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        grabCursor : true,//鼠标变成手掌形状
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        speed:300,//执行速度
        autoplay : {
          delay:1000//执行延迟时间
        }
      })        


    /* 秒杀倒计时 */
    /* 假设从服务器中获取的时间是2小时 */
    var time = 2 * 60 * 60;//得到2小时的秒数
    /* 获取time里面的p元素 */
    var pList = document.querySelectorAll('#time p:not(:nth-child(3n))');
    function downtime() {
        time--;
        /* 求出时 分 秒 */
        var hour = Math.floor(time / 3600);
        var fen = Math.floor(time % 3600 / 60);
        var miao = Math.floor(time % 60);
        pList[0].innerHTML = Math.floor(hour / 10);
        pList[1].innerHTML = Math.floor(hour % 10);
        pList[2].innerHTML = Math.floor(fen / 10);
        pList[3].innerHTML = Math.floor(fen % 10);
        pList[4].innerHTML = Math.floor(miao / 10);
        pList[5].innerHTML = Math.floor(miao % 10);
        return 1;
    }
    downtime();
   
    /* 开启一个定时器，每过一秒，时间减一秒 */
    setInterval(downtime, 1000);
});





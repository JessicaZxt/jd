window.addEventListener('load', function () {
    //   初始化分类左侧的滑动 限制了是初始化分类左侧的滑动效果  传人category-right里面的轮播图大容器选择器
    new Swiper('.left .swiper-container', {
        direction: 'vertical', // 垂直滚动
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        freeMode: true, // 是否添加滑动的惯性

        mousewheel: true,//支持鼠标滚轮
    });
    //   初始化分类左侧的滑动 限制了是初始化分类右侧的滑动效果  传人category-right里面的轮播图大容器选择器
    new Swiper('.right .swiper-container', {
        direction: 'vertical', // 垂直滚动
        // 可以支持多张轮播图显示 属性一定要加 内容滚动的距离如果不加无法计算
        slidesPerView: 'auto',
        freeMode: true, // 是否添加滑动的惯性
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        mousewheel: true,//支持鼠标滚轮
    });


    /* 给左边的每个li一个点击事件 */
    var lis = document.querySelectorAll('.left li');
    /* 获取每个li的高度 */
    var lisHeight = lis[0].offsetHeight;
    /* 获取移动的元素swiper-wrapper */
    var swiper = document.querySelector('.left .swiper-wrapper');
    /* 获取内容元素swiper-slide */
    var slide = document.querySelector('.left .swiper-slide');

    /* 获取可以滚出的最大距离 */
    var h = swiper.offsetHeight - slide.offsetHeight;
    console.log(h);

    /* 循环遍历给每个li添加点击事件 */
    for (var i = 0; i < lis.length; i++) {
        /* 设置一个属性 */
        lis[i].dataset['index'] = i;
        lis[i].addEventListener('click', function () {
            var index = this.dataset['index'];
            var scroll = -index * lisHeight;
            if (scroll <h) {
                scroll = h;
            }
            swiper.style.transition = "all 0.2s";
            swiper.style.transform = 'translate3d(0px,' + scroll + 'px, 0px)';
            /* 先给全部的li删除类名，然后给点击的这个加上类名 */
            for (var j = 0; j < lis.length; j++) {
                lis[j].classList.remove('active');
            }
            this.classList.add('active');
        })
    }
})
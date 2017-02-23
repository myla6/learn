//调用方法 $(".bullet").bullet({ distance: 55 });
var flg = true;
$.fn.bullet = function (options) {
    var defaults = {
        line: 4,    //弹幕行数(默认4行)
        speed: 0.1, //移动多少位移（默认0.1）
        top: 30,    //第一行的top值（默认30）
        distance: 60,   //每行之间的距离（默认60）
        titCell: ".bullet",  //导航元素包裹器
        mainCell: ".bulletContent",    //目标显示元素包裹器
        callback: $.noop
    };
    var params = $.extend({}, defaults, options || {});
    if (flg) {
        var css = '.bullet {overflow-x:hidden; overflow-y:scroll\9;margain:0 auto;}.bullet .bulletBox {position: absolute;-moz-transform:translate(0px,0px); -ms-transform:translate(0px,0px); -o-transform:translate(0px,0px); -webkit-transform:translate(0px,0px); transform:translate(0px,0px); -moz-transform:translate3d(0px,0px,0px); -ms-transform:translate3d(0px,0px,0px); -o-transform:translate3d(0px,0px,0px); -webkit-transform:translate3d(0px,0px,0px); transform:translate3d(0px,0px,0px); }.bullet .bulletContent { position: relative; z-index: 1000; border-radius: 30px; background: rgba(0,0,0,.5); padding: 2px 8px; -webkit-font-smoothing: antialiased; display: inline-block; margin-left: 60px; float: left; color: #fff;white-space:nowrap; }';
        var head = $(document).find('head');
        head.append('<style>' + css + '</style>');
        flg = false;
    }
    var i, j, begainLen = 0;
    var content = $(".bulletContent");
    var length = content.length;
    var endLen = Math.floor(length / params.line);
    var number = endLen;
    $(".bullet").html("");
    for (i = 0; i < params.line; i++) {
        $(".bullet").append('<div class="bulletBox" style="top:' + params.top + 'px;"></div>');
        var bulletContent = "";
        if (length <= params.line) { endLen = length; }
        for (j = begainLen; j < endLen; j++) {
            $(".bulletBox").each(function () {
                if ($(this.index == i)) {
                    $(this).append(content[j]);
                }
            });
        }
        begainLen = endLen;
        if (i + 2 == params.line) {
            endLen = length
        } else {
            endLen = endLen + number;
        }
        params.top += params.distance;
    }
    var ie2 = !!(!window.addEventListener && navigator.userAgent.indexOf('Opera') === -1);//判断是否是IE8
    if (ie2) {
        $(".bullet .bulletBox").css("position", "static");
        $(".bullet .bulletContent").css("filter", "progid:DXImageTransform.Microsoft.gradient(startColorstr=#7F000000,endColorstr=#7F000000)");
        return;
    }
    $(document).ready(function () {
        $(".bullet").find(".bulletBox").each(function () {
            var the = $(this);
            var contentWidth = 0;
            the.find(".bulletContent").each(function (i, el) {
                var that = $(el);
                contentWidth += that.outerWidth(true);
            });
            the.css("width", contentWidth);
            var number = 0;
            setInterval(function () {
                if (number >= contentWidth) { number = 0; }
                the.css("-moz-transform", "translate3d(" + -(number = (number + params.speed)) + "px,0px,0px)");
                the.css("-webkit-transform", "translate3d(" + -(number = (number + params.speed)) + "px,0px,0px)");
                the.css("-ms-transform", "translate(" + -(number = (number + params.speed)) + "px,0px)");//IE9仅适用于2D转换
                the.css("-o-transform", "translate(" + -(number = (number + params.speed)) + "px,0px)");//Opera仅适用于2D转换
                the.css("transform", "translate3d(" + -(number = (number + params.speed)) + "px,0px,0px)");
                the.css("transition", "transform (1000 / 60)s");
            }, 1000 / 60);
            //var time=Math.floor(contentWidth/(params.speed/(1000 / 60)));
            //the.css("transition", "transform " + time + "s)");
        });
    });
}
// 当文档加载完毕时执行
document.addEventListener("DOMContentLoaded", function() {
    // 获取当前页面的路径和查询字符串
    var pathAndQuery = window.location.pathname + window.location.search;

    // 构建新的URL
    var newUrl = "https://ctf.probius.xyz" + pathAndQuery;

    // 显示一个警告消息给用户
    console.log("由于CDN接入，站点已更改，正在重定向跳转到 " + newUrl);

    // 重定向到新的网址
    window.location.href = newUrl;
});

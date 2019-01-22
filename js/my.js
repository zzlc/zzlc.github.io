function post_to_evm() {
    //example
    var params = { id: 1, name: 'test' };
    url = 'localhost:6688/v1/zzlc.github.io/v3';
    // $.post(url, params, function (data) {
    //     alert(data);//这个data就是test_post.php返回的数据
    // });
    $.post(url, params);
};

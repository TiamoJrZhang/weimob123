var mine_module = (function () {
    comAjax('/getUserInfo').then(function (res) {
        createDom(res);
        console.log(res);
    }, function (error) {
        console.log(error);
    });

    //渲染dom
    function createDom(userInfoData) {
        if (!userInfoData) return;

        /* mine image */
        var user_level = $('.user_level');
        var avatar = $('.avatar');
        user_level.innerHTML = userInfoData.user_level;
        avatar.src = userInfoData.Avatar;
        /* all orders */
        var bottom = $('.bottom');
        var ul = document.createElement('ul');
        var fragment = document.createDocumentFragment();
        var all_order = userInfoData.all_order;
        for (var key in all_order) {
            var li = document.createElement('li');
            var span = document.createElement("span");
            var spanTxt = document.createElement("span");
            var img = document.createElement("img");
            var div = document.createElement("div");
            var br = document.createElement("br");
            img.style.display = 'inline-block';
            spanTxt.style.fontSize = '0.2rem';
            spanTxt.style.marginTop = '0.08rem';
            spanTxt.style.display = 'inline-block';
            span.className = "number";
            div.className = 'number-icon';
            var li_name;
            switch (key) {
                case 'w_pay':
                    img.src = '../images/icon.png';
                    li_name = '待支付';
                    break;
                case 'w_deliver':
                    img.src = '../images/icon.png';
                    li_name = '待发货';
                    break;
                case 'w_receive':
                    img.src = '../images/icon.png';
                    li_name = '待收货';
                    break;
                case 'g_right':
                    img.src = '../images/icon.png';
                    li_name = '维权';
                    break;
            }

            spanTxt.innerHTML = li_name;
            span.innerHTML = all_order[key];
            div.appendChild(img);
            div.appendChild(span);
            li.appendChild(div);
            li.appendChild(br);
            li.appendChild(spanTxt);
            fragment.appendChild(li);
        };

        ul.appendChild(fragment);
        bottom.appendChild(ul);
    };
})();
var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 640) {
    deviceWidth = 640;
    console.log('请前往PC端');
}
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';

function $(ele) {
    return document.querySelector(ele);
};

var comAjax = function (url) {
    return new Promise(function (resolve, reject) {
        var handler = function () {
            if(this.readyState !== 4) return;
            if(this.status === 200) {
                resolve(this.response);
            } else {
                reject(new Error(this.statusText));
            }
        };
        var client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        client.responseType = 'json';
        client.setRequestHeader('Accept', 'application/json');
        client.send();
    });
};



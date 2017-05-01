var https = require('https');
var access_token='gyoNmCrG22uhGk4rLybOCVR67YcJ0dQlqHg5w1zpTaUn5bBcihNUbSVn4uWDJx6b';
var agentid = 84;
var menu = {
    "button": [
        {
            "name": "学生信息查询",
            "sub_button": [
                {
                    "type": "view",
                    "name": "个人基本信息",
                    "url": "/personinfo"
                },
                {
                    "type": "view",
                    "name": "导师信息",
                    "url": "/mentorinfo"
                },
                {
                    "type": "view",
                    "name": "开题信息",
                    "url": "/thesis"
                },
                {
                    "type": "view",
                    "name": "实习信息",
                    "url": "/intership"
                },
                {
                    "type": "view",
                    "name": "就业信息",
                    "url": "/job"
                }
            ]
        }
    ]
};

var post_str = new Buffer(JSON.stringify(menu));
//var post_str = JSON.stringify(menu);
console.log(post_str.toString());
console.log(post_str.length);

var post_options = {
    host: 'qyapi.weixin.qq.com',
    port: '443',
    path: '/cgi-bin/menu/create?access_token=' + access_token+'&agentid='+agentid,
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': post_str.length
    }
};

var post_req = https.request(post_options, function (response) {
    var responseText = [];
    var size = 0;
    response.setEncoding('utf8');
    response.on('data', function (data) {
        responseText.push(data);
        size += data.length;
    });
    response.on('end', function () {
        console.log(responseText);
    });
});

// post the data
post_req.write(post_str);
post_req.end();


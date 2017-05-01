var later=require('later');
var https=require('https');

var corpid="wx1d3765eb45497a18";
var corpsecret="60L95wuR0K14tG8aIDEaGA0w6NqyQi4_gLjp5CYLTicxCjZoZNe0SumeQvuomZU9";
var access_token;

later.date.localTime();
console.log("Now"+new Date());

var sched = later.parse.recur().every(1).hour();//设置事件触发的间隔，每一个小时触发一次
next = later.schedule(sched).next(10);//从当前时间开始循环10次
console.log(next);

var timer=later.setInterval(test,sched);
setTimeout(test,2000);//第一次事件有载入队列，但没被调用，这里用setTimeout让第一次事件被调用

function test(){
	console.log(new Date());
	var options={//设置请求主机、路径
		hostname:'qyapi.weixin.qq.com',
		path:'/cgi-bin/gettoken?corpid='+corpid+'&corpsecret='+corpsecret
	};
	var req=https.get(options,function(res){
		var bodyChunks="";
		res.on('data',function(chunk){
			bodyChunks+=chunk;
		});
		res.on('end',function(){
			var body = JSON.parse(bodyChunks);//将请求体转换为JSON格式
			if(body.access_token){//获取对象中的access_token属性值
				access_token=body.access_token;
				console.log(access_token);
			}else{//如果该对象中没有access_token，就显示body的具体内容
				console.dir(body);
			}
		});
	});
	req.on('error',function(e){//请求有误，提示错误消息
		console.log('ERROR:'+e.message);
	});
}
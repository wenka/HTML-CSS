var appKey = "***********";

var token = "nTRNWz9MUnTauK5m/l0sUwWSpXz4WtgZByJ1EL68IG9wislOA3wXNq+2JjHD6mvQwu/1rbhkBf5GeglxjKMbQw==";
var config = {
    protobuf: "./js/protobuf-2.2.8.min.js"
    // protobuf : "//cdn.ronghub.com/protobuf-2.2.8.min.js"
    // protobuf : "http(s)://cdn.ronghub.com/protobuf-2.2.8.min.js"
};

RongIMLib.RongIMClient.init(appKey, null, config);

var instance = RongIMClient.getInstance();

// 连接状态监听器
RongIMClient.setConnectionStatusListener({
    onChanged: function (status) {
        console.log(status);
        switch (status) {
            case RongIMLib.ConnectionStatus.CONNECTED:
                break;
        }
    }
});

//开始链接
RongIMClient.connect(token, {
    onSuccess: function (userId) {
        //链接成功后 才可 发送消息
        console.log("链接成功，用户id：" + userId)
        // sendTextMessage();
    },
    onTokenIncorrect: function () {
        //console.log('token无效');
    },
    onError: function (errorCode) {
        console.log(errorCode);
    }
});


//发送消息定义
function sendTextMessage(targetId, message) {
    /*
    文档： http://www.rongcloud.cn/docs/web.html#5_1、发送消息
           http://rongcloud.cn/docs/api/js/TextMessage.html
    1: 单条消息整体不得大于128K
    2: conversatinType 类型是 number，targetId 类型是 string
    */

    var content = {
        content: message,
        extra: null
    };

    var conversationtype = RongIMLib.ConversationType.PRIVATE; // 私聊
    var msg = new RongIMLib.TextMessage(content);
    instance.sendMessage(conversationtype, targetId, msg, {
        onSuccess: function (message) {
            console.log("发送文字消息成功");
            console.log(message);
        },
        onError: function (errorCode, message) {
            console.log("发送文字消息失败");
            console.log(errorCode);
        }
    });
}

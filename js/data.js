
var com = null;

if (!com) {
    com = new Object();
}

if (!com.server){
    com.server = new Object();
}

com.server = function () {
   this.data = [
        {
            "name": "河南省",
            "children": [
                {
                    "name": "郑州市"
                },
                {
                    "name": "南阳市"
                },
                {
                    "name": "许昌市"
                }
            ]
        },
        {
            "name": "上海市",
            "children": [
                {
                    "name": "陆家嘴"
                },
                {
                    "name": "徐汇区"
                },
                {
                    "name": "闵行区"
                }
            ]
        },
    ]
}
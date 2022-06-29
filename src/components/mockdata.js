const Mock = require('mockjs')
Mock.mock('/goodlist', 'get', {
    "phoneinfos": [
        {
            "id": 1,
            "info": "原生美肌人像|奇迹阳关动人新色",
            "price": 3000,
            "plusprice": 80,
            "imgsrc": "images/phone1.jpg"
        },
        {
            "id": 2,
            "info": "全线拉满的冷血旗舰",
            "price": 2000,
            "imgsrc": "images/phone2.jpg"
        },
        {
            "id": 3,
            "info": "大电量、大音量、大屏幕",
            "price": 2500,
            "imgsrc": "images/phone3.jpg"
        },
        {
            "id": 4,
            "info":  "全新骁龙8 | 5000万主摄",
            "price": 1200,
            "imgsrc": "images/phone4.jpg"
        },
    ],
    productinfos:[
        {
            "id" : 1,
            "info": "米家互联网对开门冰箱，540L",
            "price": 2799,
            "imgsrc": "images/good1.JPG"
        },
        {
            "id" : 2,
            "info":"米家冰箱无霜三门",
            "price":1599,
            "imgsrc":"images/good2.jpg"
        },
        {
            "id" : 3,
            "info":"EraClean冰箱除味消毒器 玫瑰金",
            "price": 139,
            "imgsrc":"images/good3.png"
        },
        {
            "id" : 4,
            "info":"米家冰·烘洗套餐",
            "price":7998,
            "imgsrc":"images/good4.jpg"
        }
    ],
    foodinfos:[
        {
            "id":1,
            "info":"百草味 休闲零食小吃",
            "price":34.9,
            "imgsrc":"images/food1.jpg"
        },
        {
            "id":2,
            "info":"三只松鼠每日坚果750g",
            "price":149,
            "imgsrc":"images/food2.jpg"
        },
        {
            "id":3,
            "info":"百草味 肉干肉铺休闲零食小吃",
            "price":35.7,
            "imgsrc":"images/food3.jpg"
        },
        {
            "id":4,
            "info":"弘一紫米夹心面包",
            "price":19.9,
            "imgsrc":"images/food4.jpg"
        }
    ],
    clothinfos:[
        {
            "id":1,
            "info":"罗蒙男装休闲裤",
            "price":139.0,
            "imgsrc":"images/cloth1.jpg",
        },
        {
            "id":2,
            "info":"阿诺敦三件装短袖T恤",
            "price":78.0,
            "imgsrc":"images/cloth2.jpg",
        },
        {
            "id":3,
            "info":"南极人休闲裤夏季新款",
            "price":88.0,
            "imgsrc":"images/cloth3.jpg",
        },
        {
            "id":4,
            "info":"花花公子夹克男外套",
            "price":125.0,
            "imgsrc":"images/cloth4.jpg",
        }
    ]
})
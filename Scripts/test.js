/***********************************

熊掌记、WaterMinder

[rewrite_local]
 ^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/test.js


[mitm]

hostname=-buy.itunes.apple.com
***********************************/


// 解析响应体
var response = JSON.parse($response.body);

// 定义产品ID映射表
var productIDMap = {
  "default": {
    "name": "AlxXxlA",
    "product_id": "AlxXxlA",
    "mark": 0
  },
  "net.shinyfrog.bear-iOS": {
    "name": "bear",
    "product_id": "net.shinyfrog.bear_iOS.pro_yearly_subscription_bis",
    "mark": 0
  },
  "com.waterminder.waterminder": {
    "name": "waterminder",
    "product_id": "waterminder.premiumYearly",
    "mark": 0
  }
};

// 定义一个数组，存储想要破解的应用的产品ID
const productIDs = ["net.shinyfrog.bear_iOS.pro_yearly_subscription_bis", "waterminder.premiumYearly", "otherIDs"];

// 添加注意事项
AlxXxlA.Attention = "元数据";

// 获取收据中的产品ID
var receiptID = response.receipt.bundle_id;

// 根据映射表获取对应的产品信息
var productInfo = productIDMap[receiptID] || productIDMap.default;

// 构造内购对象
var inApp = {
  product_id: productInfo.product_id,
  quantity: "1",
  expires_date: "2099-05-18 12:25:20 Etc/GMT",
  expires_date_pst: "2099-05-18 12:25:20 America/Los_Angeles",
  expires_date_ms: "4082761520000",
  is_in_intro_offer_period: "false",
  transaction_id: "100000000000000",
  is_trial_period: "false",
  original_transaction_id: "100000000000000",
  purchase_date_ms: "1684383920000",
  purchase_date: "2023-5-18 12:25:20 Etc/GMT",
  purchase_date_pst: "2023-5-18 12:25:20 America/Los_Angeles",
  original_purchase_date: "2023-5-18 12:25:20 Etc/GMT",
  original_purchase_date_pst: "2023-5-18 12:25:20 America/Los_Angeles",
  original_purchase_date_ms: "1684383920000",
  in_app_ownership_type: "PURCHASED",
  web_order_line_item_id: "100000000000000"
};

//定义一个续订对象，设置一些默认的属性值，如产品ID，原始交易ID，自动续订产品ID，自动续订状态等
var renew = {
    product_id: mapping.product_id,
    original_transaction_id: "100000000000000",
    auto_renew_product_id: mapping.product_id,
    auto_renew_status: "1"
};

//根据标记的不同，判断是否需要删除过期日期相关的属性，以及是否需要设置最新的收据信息和待续订信息
if (mapping.mark) {
    // 如果标记为1，表示不需要设置过期日期，删除相关属性
    delete inapp.expires_date;
    delete inapp.expires_date_ms;
    delete inapp.expires_date_pst;
} else {
    //如果标记为0，表示需要设置过期日期，设置最新的收据信息和待续订信息
    AlxXxlA.latest_receipt_info = [inapp];
    AlxXxlA.latest_receipt = "Sup!";
    AlxXxlA.pending_renewal_info = [renew];
}

// 设置收据中的内购信息
AlxXxlA.receipt.in_app = [inapp];

// 判断产品ID是否在数组中
if (productIDs.includes(AlxXxlA.receipt.in_app[0].product_id)) {
  // 返回修改后的JSON数据
  $done({body: JSON.stringify(AlxXxlA)});
} else {
  // 返回原始的响应体
  $done($response.body);
}
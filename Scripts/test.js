/***********************************
[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/test.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]

hostname=api.revenuecat.com
***********************************/


// ========= 动态ID ========= //
const entitlementMapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Aphrodite': ['all'],
  'apollo': ['all'],
  'widget_art': ['all'],
  'OneBox': ['all'],
  'Spark': ['premium'],
  'Pillow': ['premium'],
  '1Blocker': ['premium'],
  'VSCO': ['membership'],
  'UTC': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'ScannerPro': ['plus'],
  'WhiteCloud': ['allaccess'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'simple-': ['patron'],
  'streaks': ['patron'],
  'andyworks-calculator': ['patron'],
  'vibes': ['patron'],
  'CountDuck': ['premium', 'Lifetime'],
  'IPTVUltra': ['premium'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'ChatGPTApp': ['Advanced'],
  'APTV': ['pro'],
  'TouchRetouchBasic': ['premium'],
  'My%20Jump%20Lab': ['lifetime'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  'Paku': ['pro'],
  'Awesome%20Habits': ['premium'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'MoneyThings': ['Premium'],
  'Anybox': ['pro'],
  'Fileball': ['filebox_pro'],
  'Noto': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'WidgetSmith': ['Premium'],
  'Percento': ['premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'Locket': ['Gold'],
  'My%20Tim': ['Pro'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'OneWidget': ['allaccess'],
  'CardPhoto': ['premium'],
  'PDF%20Viewer': ['sub.pro'],
  'PhotoRoom': ['business'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Tangerine': ['Premium'],
  'PastePal': ['premium'],
  'Airmail': ['Airmail Premium'],
  'Stress': ['StressWatch Pro'],
  'PinPaper': ['allaccess'],
  'Echo': ['PLUS'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'Overdue': ['Pro'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Spektr': ['premium'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'Tasks': ['Pro'],
  'Currency': ['plus'],
  'money_manager': ['premium'],
  'fastdiet': ['premium'],
  'Blurer': ['paid_access'],
  'Everlog': ['premium'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'GetFace': ['Pro access'],
  'Focused%20Work': ['Pro'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'Email%20Me': ['premium'],
  'Alpenglow': ['newPro'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters']
};

// ========= 固定部分 ========= // 
// ========= @ddgksf2021 ========= // 
var userAgent = $request.headers["User-Agent"] || $request.headers["user-agent"];

var metadata = {
  Attention: "原数据！",
  request_date_ms: 1662599120248,
  request_date: "2023-05-18T12:25:20Z",
  subscriber: {
    non_subscriptions: {},
    first_seen: "2023-05-18T12:25:20Z",
    original_application_version: "7",
    other_purchases: {},
    management_url: "https://apps.apple.com/account/subscriptions",
    subscriptions: {},
    entitlements: {},
    original_purchase_date: "2023-05-17T12:25:20Z",
    original_app_user_id: "$RCAnonymousID:AlxXxlA",
    last_seen: "2023-05-18T12:25:20Z"
  }
};

var subscriptionInfo = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-05-18T12:25:20Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2023-05-18T12:25:20Z",
  purchase_date: "2023-05-18T12:25:20Z",
  store: "app_store"
};

var premiumSubscription = {
  grace_period_expires_date: null,
  purchase_date: "2023-05-18T12:25:20Z",
  product_identifier: "alxxxla",
  expires_date: "2099-05-18T12:25:20Z"
};

var metadataObject = JSON.parse(JSON.stringify(metadata));
premiumSubscription.product_identifier = "com.alxxxla.premium.yearly";
metadataObject.subscriber.subscriptions["com.alxxxla.premium.yearly"] = subscriptionInfo;
const matchedKey = Object.keys(entitlementMapping).find(key => userAgent.includes(key));
if (matchedKey) {
  let [entitlementKey, subscriptionKey] = entitlementMapping[matchedKey];
  if (subscriptionKey) {
    premiumSubscription.product_identifier = subscriptionKey;
    metadataObject.subscriber.subscriptions[subscriptionKey] = subscriptionInfo;
  }
  metadataObject.subscriber.entitlements[entitlementKey] = premiumSubscription;
} else {
  metadataObject.subscriber.entitlements.pro = premiumSubscription;
}

$done({ body: JSON.stringify(metadataObject) });

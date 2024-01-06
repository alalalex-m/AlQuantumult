/***********************************
[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/test.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

[mitm]

hostname=api.revenuecat.com
***********************************/


// ========= 动态ID ========= //
const entitlementMapping = {
//'User-Agent':['权益名称','订阅标识符']
  'Aphrodite': ['all'],
  'apollo': ['all'],
  'VSCO': ['membership'],
  'CountDuck': ['premium', 'Lifetime'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'Awesome%20Habits': ['premium'],
  'Anybox': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'Planny': ['premium'],
  'Locket': ['Gold'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'PastePal': ['premium'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'GetFace': ['Pro access'],
};

// ========= 固定部分 ========= // 
// ========= @ddgksf2021 ========= // 
var userAgent = $request.headers["User-Agent"] || $request.headers["user-agent"];

var metadata = {
  AlxXxlA: "原数据！",
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

// ========= 动态ID ========= //
const entitlementMapping = {
//'UA':['pro','com...']
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Tasks': ['Pro'],
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
    original_purchase_date: "2022-09-07T13:05:43Z",
    original_app_user_id: "$RCAnonymousID:ddgksf2013",
    last_seen: "2022-09-08T01:04:03Z"
  }
};
var subscriptionInfo = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-18T01:04:17Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2022-09-08T01:04:18Z",
  purchase_date: "2022-09-08T01:04:17Z",
  store: "app_store"
};
var premiumSubscription = {
  grace_period_expires_date: null,
  purchase_date: "2022-09-08T01:04:17Z",
  product_identifier: "ddgksf2013_1y_128",
  expires_date: "2099-12-18T01:04:17Z"
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

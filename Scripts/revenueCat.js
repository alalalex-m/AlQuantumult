/*

Usage、VSCO、Aphrodite、totowallet、CountDuck、
 
[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/revenueCat.js


[MITM]
hostname = api.revenuecat.com

*/
const guding = {};
const guding6 = JSON.parse(typeof $response != "undefined" && $response.body || null);
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  guding.headers = $request.headers;
} else if (guding6 && guding6.subscriber) {
  guding6.subscriber.subscriptions = guding6.subscriber.subscriptions || {};
  guding6.subscriber.entitlements = guding6.subscriber.entitlements || {};
  var headers = {};
  for (var key in $request.headers) {
  const reg = /^[a-z]+$/;
  if (key === "User-Agent" && !reg.test(key)) {
    var lowerkey = key.toLowerCase();
    $request.headers[lowerkey] = $request.headers[key];
    delete $request.headers[key];
    }
  }
  var UA = $request.headers['user-agent'];
  const app = 'gd';
  const UAMappings = {
      
      'CountDuck':{ name: 'premium', id: 'Lifetime'},
      'Aphrodite':{ name: 'lifetime', id: 'com.ziheng.aphrodite.onetime'},
      'totowallet':{ name: 'all', id: 'com.ziheng.totowallet.onetimepurchase'},
      'VSCO':{ name: 'pro', id: 'vscopro_global_5999_annual_AutoFreeTrial'},
      'Planny':{ name: 'premium', id: 'AlxXxlA'},
      'OneBox':{ name: 'all', id: 'com.ziheng.OneBox'},
      'Awesome%20Habits':{ name: 'HabitsPremiumLifetime', id: '$rc_lifetime'},
      'apollo':{ name: 'all', id: 'com.alxxxla.premium.yearly'},

    
    
  };
  const data = {
    "expires_date": "6666-06-06T06:06:06Z",
    "original_purchase_date": "2023-06-06T06:06:06Z",
    "purchase_date": "2023-06-06T06:06:06Z",
    "ownership_type": "PURCHASED",
    "store": "app_store"
  };
  for (const i in UAMappings) {
    if (new RegExp(`^${i}`, 'i').test(UA)) {
      const { name, id } = UAMappings[i];
      guding6.subscriber.subscriptions = {};
      guding6.subscriber.subscriptions[id] = data;
      guding6.subscriber.entitlements[name] = JSON.parse(JSON.stringify(data));
      guding6.subscriber.entitlements[name].product_identifier = id;
      break;
    }
  }
  guding.body = JSON.stringify(guding6);
}
$done(guding);

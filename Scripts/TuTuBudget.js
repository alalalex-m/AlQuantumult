/*
 
[rewrite_local]

# TutuBudget
^https?:\/\/api\.revenuecat\.com\/v\d\/(receipts|subscribers\/(\$RCAnonymousID%3A)?\w{32})$ url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/TuTuBudget.js
 
[mitm]

hostname = api.revenuecat.com

*/
var objc = JSON.parse($response.body);

    objc =
{
	"request_date": "2023-11-03T07:10:09Z",
	"request_date_ms": 1698995409091,
	"subscriber": {
		"entitlements": {},
		"first_seen": "2022-01-10T15:23:33Z",
		"last_seen": "2023-05-19T16:02:29Z",
		"management_url": null,
		"non_subscriptions": {},
		"original_app_user_id": "$RCAnonymousID:6f83e84c3795452d9a4732627a678652",
		"original_application_version": "107",
		"original_purchase_date": "2022-01-10T14:52:11Z",
		"other_purchases": {},
        "subscriptions": {
            "com.ziheng.totowallet.onetimepurchase": {
            "billing_issues_detected_at": null,
            "expires_date": null,
            "grace_period_expires_date": null,
            "is_sandbox": false,
            "original_purchase_date": null,
            "ownership_type": "PURCHASED",
            "period_type": "normal",
            "purchase_date": "2021-12-18T09:56:52Z",
            "store": "app_store",
            "unsubscribe_detected_at": null
      }
    }
  }
};

$done({body : JSON.stringify(objc)});

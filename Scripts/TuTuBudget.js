/*
 
[rewrite_local]

# TutuBudget
^https?:\/\/api.revenuecat.com\/v1\/subscribers\/$RCAnonymousID%3A6f83e84c3795452d9a4732627a678652 url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/TuTuBudget.js
 
[mitm]

hostname = api.revenuecat.com

*/
var objc = JSON.parse($response.body);

    objc =
{
  "request_date": "2023-11-03T07:10:09Z",
  "request_date_ms": 1698995409091,
  "subscriber": {
    "entitlements": {
      "all": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "com.ziheng.totowallet.onetimepurchase",
        "purchase_date": "2023-10-03T07:10:09Z"
      }
    },
    "first_seen": "2022-01-10T15:23:33Z",
    "last_seen": "2023-05-19T16:02:29Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {
      "com.ziheng.totowallet.onetimepurchase": [{
        "id": "6060eea19b",
        "is_sandbox": true,
        "original_purchase_date": "2022-01-27T04:17:03Z",
        "purchase_date": "2022-01-27T04:17:03Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:6f83e84c3795452d9a4732627a678652",
    "original_application_version": "107",
    "original_purchase_date": "2022-01-10T14:52:11Z",
    "other_purchases": {
      "com.ziheng.totowallet.onetimepurchase": {
        "purchase_date": "2022-01-27T04:17:03Z"
      }
    },
    "subscriptions": {
      "com.ziheng.totowallet.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-02-11T11:15:28Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-01-11T11:15:29Z",
        "ownership_type": "PURCHASED",
        "period_type": "trail",
        "purchase_date": "2022-01-11T11:15:28Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-01-24T05:49:32Z"
      },
      "com.ziheng.totowallet.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2021-12-21T09:56:52Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-12-18T09:56:53Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-12-18T09:56:52Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2021-12-19T13:27:33Z"
      },
      "com.ziheng.totowallet.onetimepurchase": {
          "billing_issues_detected_at": null,
          "expires_date": "2099-12-21T09:56:52Z",
          "grace_period_expires_date": null,
          "is_sandbox": false,
          "original_purchase_date": "2021-12-18T09:56:53Z",
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

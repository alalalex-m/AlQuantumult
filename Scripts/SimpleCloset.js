[rewrite_local]
#Simple Closet

^https?:\/\/closet\.jinjian\.tech\/api\/v3\/apple_app_store\/resolve_receipt$ url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/SimpleCloset.js

[mitm]

hostname = closet.jinjian.tech

*******************************/


let obj = JSON.parse($response.body);
obj = {
  "message": null,
  "data": {
    "type_text": "Premium",
    "expired_at": "3013-01-01 00:00:00",
    "apple_app_store_auto_renew": false,
    "original_purchase_date_ms": "1693021116000",
    "type": "premium"
  },
  "status": "success"
};
$done({body: JSON.stringify(obj)});
    "status": "success"
  })
});

[rewrite_local]
#Simple Closet

^https:\/\/closet\.jinjian\.tech\/api\/v3\/apple_app_store\/resolve_receipt url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/SimpleCloset.js

[mitm]

hostname = closet.jinjian.tech

*******************************/



if ($response.body) {
    $done({
        body: JSON.stringify({
            "message" : null,
            "data" : {
                "type_text" : "https://t.me/yqc_123 已为您破解永久会员",
                "expired_at" : "2999-09-28 06:06:06",
                "apple_app_store_auto_renew" : false,
                "original_purchase_date_ms" : "1693021116000",
                "type" : "premium"
              },
            "status" : "success"
        })
    });
} else {
    $done({})
}

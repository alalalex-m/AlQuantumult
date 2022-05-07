/*
 
[rewrite_local]

# Hyperweb
 ^https://zy6kcqa01a.execute-api.us-east-2.amazonaws.com/prod/verifyReceipt url script-response-body https://github.com/ddgksf2013/Cuttlefish/raw/master/Crack/hyperweb.js

[mitm]

hostname = api.revenuecat.com

*/




var url = $request.url;
let obj = JSON.parse($response.body);

    obj= {
  "autoRenewStatus" : "0",
  "isActive" : true,
  "expireDateMs" : 4072897555000,
  "expirationIntent" : "USER_CANCELLED",
  "productId" : "ai.laso.ios.HyperWeb.yearly.subscription"
}
;

$done({body:JSON.stringify(obj)});
© 2022 GitHub, Inc.
Terms
Privacy

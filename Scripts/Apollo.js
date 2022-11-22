/*
 
[rewrite_local]

# TutuBudget
^https?:\/\/api\.revenuecat\.com\/v\d\/(receipts|subscribers\/(\$RCAnonymousID%3A)?\w{32})$ url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/TuTuBudget.js
 
[mitm]

hostname = api.revenuecat.com

*/
var hcsavn = JSON.parse($response.body);

hcsavn = {
  "status_message": "Receipt valid, subscription active, and set to auto-renew.",
  "subscription_type": "lifetime",
  "status_code": 0
}

$done({body: JSON.stringify(hcsavn)});

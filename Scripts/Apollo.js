/*
 
[rewrite_local]

# Apollo
https://apollopushserver.xyz/api/verify url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Apollo.js
 
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

/***********************************

图图记账、Aphrodite、Apollo、NotePlan3、

[rewrite_local]

# ～ RevenueCat
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/RevenueCat.js

[mitm]

hostname=api.revenuecat.com, vsco.co

***********************************/

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/TuTuBudget.js

^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Aphrodite.js

https://apollopushserver.xyz/api/verify url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Apollo.js

^https:\/\/(api\.revenuecat\.com\/v\d\/subscribers|vsco\.co\/api\/subscriptions\/\d\.\d\/user-subscriptions)\/ url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/VSCO.js

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/NotePlan3.js

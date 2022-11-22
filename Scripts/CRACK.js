/***********************************

图图记账、Aphrodite、Apollo、

[rewrite_local]

# ～ RevenueCat
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/RevenueCat.js

[mitm]

hostname=api.revenuecat.com

***********************************/

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/TuTuBudget.js

^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Aphrodite.js

^https://apollopushserver.xyz/api/verify url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Apollo.js


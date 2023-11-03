// Combined script with UA detection
const userAgent = $request.headers['User-Agent'];

if (userAgent.includes('CountDuck')) {
    /*

    [rewrite_local]

    U-A：CountDuck
     
    # 倒数鸭
     ^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/CountdownDuck.js
     ^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/CountdownDuck.js

    [mitm]
    hostname=api.revenuecat.com

    */
} if (userAgent.includes('Aphrodite')) {
/*    # Aphrodite
    ^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/(\$RCAnonymousID\%)?(\w)+$ url script-echo-response https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Aphrodite.js


    [mitm]

    hostname = api.revenuecat.com
}
*/
    else {
  // Script 1
  // *******************************
  
}


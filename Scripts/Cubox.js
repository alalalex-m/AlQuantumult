/*

[rewrite_local]
  
# Cubox
 ^https:\/\/cubox.pro\/c\/api\/userInfo url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/Raindrop.js

[mitm]
cubox.pro

*/

var body = $response.body;
var obj = JSON.parse(body);
obj.data.payTime = "2021-01-01T08:00:00+08:00";
obj.data.isExpire = false;
obj.data.expireTime = "2039-01-01T08:00:00+08:00";
$done({body: JSON.stringify(obj)});

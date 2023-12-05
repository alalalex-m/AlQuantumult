/*
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/CamScanner.js

[mitm]
hostname = ap*.intsig.net
*/


let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"2013017600"}}};
$done({body: JSON.stringify(obj)});

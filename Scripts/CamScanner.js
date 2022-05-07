/*
CamScanner

***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body CamScanner.js

[mitm]
hostname = ap*.intsig.net


**************************/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"187878789797"}}};
$done({body: JSON.stringify(obj)});

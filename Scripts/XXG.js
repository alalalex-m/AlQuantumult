/*
 
[rewrite_local]

# Style Art
 ^https:\/\/xianbeikeji\.com\/daily\/app\/user\/query url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/XXG.js
 
[mitm]

hostname = api-aidraw.3dmoxiu.com

*/
var body = $response.body.replace(/vipStatus":0/g, 'vipStatus":1').replace(/vipType":0/g, 'vipType":1').replace(/vipFlag":0/g, 'vipFlag":1');
$done({ body });

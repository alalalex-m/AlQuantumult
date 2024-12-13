/*
 
[rewrite_local]

# 12306
https://apollopushserver.xyz/api/verify url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/12306.js
 
[mitm]

hostname = ad.12306.cn

***********************************************/






const version = 'V1.0.23';

var obj=JSON.parse($request.body),alxxxla={};"0007"==obj.placementNo?(alxxxla.materialsList=[{billMaterialsId:"6491",filePath:"alxxxla",creativeType:1}],alxxxla.advertParam={skipTime:1},alxxxla.code="00"):alxxxla="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},"undefined"!=typeof $task?$done({body:JSON.stringify(alxxxla)}):$done({response:{body:JSON.stringify(alxxxla)}});
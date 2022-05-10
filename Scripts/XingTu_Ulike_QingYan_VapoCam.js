/*

[rewrite_local]
  
# 醒图_Ulike_轻颜相机_vaporcam（2022-05-09）@ddgksf2013
https://(commerce-.*api|pay).(faceu|wecut).(com|mobi)/(commerce|apple)/(iosAppVerifyReceipt.php|v1/subscription/user_info) url script-response-body https://raw.githubusercontent.com/alalalex-m/AlQuantumult/main/Scripts/XingTu_Ulike_QingYan_VapoCam.js

[mitm]
hostname=commerce-i18n-api.faceu.mobi,commerce-api.faceu.mobi, pay.wecut.com

*/


const path1 = "/commerce/v1/subscription/user_info";
const path2 = "/apple/iosAppVerifyReceipt.php";

let PhoS = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1)
{
    PhoS.data.start_time = 1584674770;
    PhoS.data.end_time = 4077660370;
    PhoS.data.is_cancel_subscribe = false;
    PhoS.data.flag = true;
}
if ($request.url.indexOf(path2) != -1)
{
   PhoS.data = {"isValid": 1,"expiresTs": 4077660370}
}
$done({body: JSON.stringify(PhoS)});

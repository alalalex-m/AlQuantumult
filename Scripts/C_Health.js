const url = `https://app.xiaoyuan.ccb.com/channelManage/outbreak/addOutbreak`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/plain, */*`,
'Origin' : `https://app.xiaoyuan.ccb.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `IN010=10001|Yk+o/; IN001=1006|Yk+o/; IN008=8002|Yk+ol; tgw_l7_route=962a3b4779bd6f5c07dde82e79a16128; sid=d5c35cd9-3c62-4aa8-b1e4-12cd813fb631`,
'Content-Type' : `application/json;charset=UTF-8`,
'Host' : `app.xiaoyuan.ccb.com`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 jianronghuixue/1.2.8`,
'Referer' : `https://app.xiaoyuan.ccb.com/LHECRESM/DZK/index2022032701.html`,
'Accept-Language' : `en-US,en;q=0.9`
};
const body = `{"stuClass":"9999","schoolId":"10530","schoolName":"湘潭大学","stId":"202005650432","userId":"A3231004159866569183518704","stName":"石浩廷","locationAddr":"定位不成功","id":"DC1393295C393E30E0539349FD0A4689","departments":"50eeac63789e4c78810a0d6571a77652","isContact":"N","isFever":"0","isWuhan":"N","nowArea":"湖南省湘潭市雨湖区","familyaddress":"湘潭大学","familyStatus":"0","diagnosisTreatment":"","nowStatus":"0","healthStatus":"3","isLevel":"N","isbackLive":"N","trafficTool":"","backTrafficTool":"","levelDate":"","backtime":"","arriveAddr":"","trafficNo":"","backTrafficNo":"","professional":"C915A790A5525445E0539349FD0A6B3F","personType":"","personCategory":null,"temperature":36,"remarks":null,"timeToLeaveHuBei":"","dateOfDisengagement":"","otherSymptoms":"","nowStatusStartTime":"","familyStatusStartTime":"","feverStartTime":"","coughStartTime":"","fatigueStartTime":"","diarrheaStartTime":"","coldStartTime":"","headacheStartTime":"","noseStartTime":"","runnyStartTime":"","throatStartTime":"","conjunctivaStartTime":"","isAppearDiagnosis":"N","isVaccinate":"1","vaccineType":"2","injectTimes":"3","otherDesc":null,"isContactWithDiagnosis":"N","isInSchool":"","stMobile":"13572955883"}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $notify("Mission Completed", "Succession is assured", response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $notify("Mision FAILED", "Sincerest Apology", reason.error);
    $done();
});

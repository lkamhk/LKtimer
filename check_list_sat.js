// setup the checklist time for sat <-!!!!!!!
//注意!!!!排序由00:00分開始至23:59最後!!請記住排列時間必須要順序!!
//勿在"(task)"內用"符號,會有bug
// [(hour),(minute),"(task)"],,
var sat_list = [
[00,01,"進入星期六"],
[00,30,"D0 show M300071"],
[02,05,"check cctv"],
[02,30,"function 3 (enter 2 not 1)"],
[03,20,"SPAN download"],
[03,30,"Check moving data"],
[03,40,"APCheck"],
[03,50,"see D2 start copy"],
[04,00,"Daily statement generation(ST)"],
[04,05,"Mark IDtoE & SDtoE(OQ)"],
[04,30,"Check D2 is started"],
[04,35,"Check programme version)"],
[05,00,"Programme memory check"],
[05,10,"see DB backup"],
[06,00,"Check GOS time"],
[06,35,"1.mvss,2.mvds"],
[06,40,"APDataCheck"],
[06,42,"GOS place order"],
[06,55,"Mark size of [io fo oq(oo) go],.txt"],
[07,05,"check mobile 5"],
[07,10,"check recorder"],
[08,05,"APcheck"],
[08,10,"GPS Tracking(report)"],
[08,28,"WS login"],
[08,30,"IVRS update"],
[09,00,"WS login"],
[09,40,"WS login"],
[10,00,"WS login"],
[10,30,"WS login"],
[10,35,"Customer feedback system cap screen"],
[11,00,"WS login"],
[11,05,"OBS"],
[11,30,"WS login"],
[12,00,"WS login"],
[12,35,"APcheck"],
[13,00,"WS login"],
[13,30,"WS login"],
[13,55,"WS login"],
[14,00,"Restart D1"],
[14,05,"Restart D0"],
[14,08,"Restart RT(LG PC)"],
[14,10,"Restart FP(FQ PC)"],
[14,12,"Restart US(WS6 PC)"],
[14,35,"WS login"],
[15,00,"WS login"],
[15,30,"WS login"],
[16,00,"WS login"],
[17,00,"WS login"],
[17,20,"AP check"],
[18,00,"WS login"],
[19,00,"WS login"],
[20,00,"WS login"],
[20,10,"Programme memory check"],
[21,00,"WS login"],
[22,00,"WS login"],
[22,05,"cctv check"],
[22,50,"print Check list"],
[22,55,"check all data request input to excel"],
[23,00,"WS login & programme memory email"],
[23,05,"OBS restart"]
];
//請check清楚時間(小時,分鐘)是順序排列

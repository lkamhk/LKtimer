﻿// setup the checklist time for sun & holiday <-!!!!!!!
//注意!!!!排序由00:00分開始至23:59最後!!請記住排列時間必須要順序!!
//勿在"(task)"內用"符號,會有bug
// [(hour),(minute),"(task)"],,
var sun_list = [
[00,30,"D0 show M300071"],
[02,05,"check cctv"],
[03,41,"APCheck"],
[04,00,"Daily statement generation(ST)"],
[04,30,"Check D2 is started"],
[04,35,"Check programme version"],
[04,45,"Check Prodution DB vs Report DB"],
[05,00,"Programme memory check"],
[05,10,"see DB backup"],
[06,00,"Check GOS time"],
[06,35,"mvds"],
[06,40,"APDataCheck"],
[06,42,"GOS place order"],
[06,55,"Mark size of [io fo oq(oo) go].txt"],
[07,45,"HSI HHI weekly option checking"],
[08,05,"APcheck"],
[08,10,"GPS Tracking(report)"],
[11,05,"OBS"],
[12,41,"APcheck"],
[15,00,"WS login + ISS GOS Symantec Virus Definitions Update Checklist"],
[17,21,"AP check"],
[17,27,"LedgerVsAB checking result"],
[18,00,"WS login + data request EMAIL"],
[20,10,"Programme memory check"],
[20,31,"D0D1 Backup"],
[22,05,"cctv check"],
[22,50,"print Check list"],
[23,00,"WS login & programme memory email"],
[23,05,"OBS restart"],
[23,45,"2345 checking result"]
];
//請check清楚時間(小時,分鐘)是順序排列

﻿// setup the checklist time for Mon,Tue,Wed,Thu,Fri <-!!!!!!!
//注意!!!!排序由00:00分開始至23:59最後!!請記住排列時間必須要順序!!
//勿在"(task)"內用"符號,會有bug
// [(hour),(minute),"(task)"],,
var day_list = [
[00,30,"D0 show M300071"],
[01,21,"check  updated result"],
[01,30,"check cb sc st cctv 10 6 3"],
[02,15,"DCASS function 3 星期二至六要做"],
[02,55,"closure of future session day tonight checking result"],
[03,21,"SPAN download"],
[03,26,"Check BF BO logout"],
[03,30,"Check checking result"],
[03,41,"APCheck2"],
[03,46,"check AR MK result有問題問埋關唔關ST"],
[04,00,"Daily statement generation(ST) & gold statement SS"],
[04,05,"Mark IDtoE & SDtoE(OQ)"],
[04,15,"Check D2 is started"],
[04,35,"Check programme version)"],
[04,45,"Check ProDB vs RptDB(mon-firday diff > 10w  call kenny)"],
[05,00,"Programme memory check"],
[05,10,"see D0D1 showing backup"],
[05,50,"check BT OMD-C connected"],
[05,58,"Check new product"],
[06,00,"Check GOS buy please order"],
[06,10,"Check BL1&2 OMD-D connected"],
[06,20,"1.mvss,2.mvds"],
[06,25,"open check trade"],
[06,30,"Run APDataChecking"],
[06,32,"Tomcat check security log & input excel"],
[06,37,"cap screen HSI 1 5 700 closing price"],
[06,55,"Mark size of [io fo oq(oo) go],.txt"],
[07,01,"OBS"],
[07,05,"check recorder"],
[07,10,"APDataCheck"],
[07,20,"Capscreen BS,BSC,BU,IO"],
[07,30,"check BO login success & BL OMD-D"],
[07,31,"0830 checking result "],
[07,35,"check gold & sliver normal"],
[07,43,"Y:\OCGPasswordChecking(BS-BU-BScheck Excel)"],
[07,45,"HSI HHI button check"],
[07,50,"BTB Connect OMD-C"],
[07,55,"check new product"],
[07,57,"number of contract in BO OQ"],
[08,00,"7 Screen Cap"],
[08,06,"APcheck2"],
[08,10,"GPS Tracking(report)"],
[08,20,"pressMU(FO,OQ)"],
[08,23,"test GOS, buy/sell button"],
[08,25,"OQ number of contract(report if larger than BO >30)"],
[08,28,"WS login"],
[08,30,"IVRS update"],
[08,31,"0830 checking result"],
[08,45,"Cap SPAN download"],
[08,46,"FO & OQ status change"],
[08,55,"BU dump cap"],
[08,58,"Trading PC OCGDCV14 should be working"],
[08,59,"JP banna check"],
[09,00,"WS login & firewall & BS start loading"],
[09,06,"BS check slow down!!"],
[09,10,"A-Share start sending order"],
[09,15,"option market open"],
[09,20,"check top 20 showing"],
[09,22,"Compare the index information in GOS with third party"],
[09,25,"check Trade differents(you can restart check trade)"],
[09,30,"Stock market open"],
[09,40,"WS login"],
[10,00,"WS login"],
[10,30,"WS login"],
[11,00,"WS login & firewall"],
[11,10,"check span backup"],
[11,15,"pps check"],
[11,20,"[reminder],order lunch"],
[11,30,"WS login"],
[12,00,"WS login"],
[12,01,"AP force close status(whatsapp)"],
[12,10,"closure of future session day tonight checking result"],
[12,40,"OQ contract number"],
[12,41,"APcheck"],
[13,00,"WS login & firewall"],
[13,30,"WS login"],
[14,00,"WS login"],
[14,35,"WS login"],
[14,45,"[reminder],check any excel update before you leave(hang report/mass mail/data request)"],
[15,00,"WS login & firewall"],
[15,02,"A-Share market off"],
[15,08,"OBS restart"],
[15,30,"WS login"],
[15,45,"DCASS function 5"],
[16,00,"WS login"],
[16,11,"IO freezed"],
[16,20,"Email for IO released"],
[16,30,"OQ freezed"],
[16,35,"DCASS function 2"],
[16,44,"closure of future session day tonight checking result"],
[16,55,"DCASS function 27"],
[17,00,"WS login + firewall excel"],
[17,05,"OQ released"],
[17,10,"DCASS function 28"],
[17,11,"1700 checking result"],
[17,21,"AP check2.txt!"],
[17,25,"LedgerVsAB checking result "],
[17,55,"Data request registration email"],
[18,00,"WS login"],
[18,39,"Cap grey diffs"],
[18,46,"1700 checking result 20200424"],
[19,00,"WS login + firewall"],
[19,21,"Cap Span download"],
[19,30,"Silver settlement price Capscreen(summer)"],
[20,00,"WS login"],
[20,10,"Programme memory check"],
[20,30,"Silver settlement price Capscreen(winter)"],
[20,35,"D0D1 backup start"],
[21,00,"WS login + firewall excel"],
[22,00,"WS login + firewall excel"],
[22,32,"Gold settlement price Capscreen(summer)"],
[22,36,"Tomcat security log"],
[22,40,"mark PC performance ICDsoft(iaccess_oper)pw(Issoperator)"],
[22,50,"print Check list"],
[23,00,"WS login & programme memory email"],
[23,05,"OBS restart"],
[23,30,"Gold settlement price Capscreen(winter)"],
[23,31,"A Stock Closing Price checking result"],
[23,44,"2345 Result check(hv output call senior staff)"],
[23,55,"closure of future session day tonight checking result+check all data request has input to excel"]
];
//請check清楚時間(小時,分鐘)是順序排列

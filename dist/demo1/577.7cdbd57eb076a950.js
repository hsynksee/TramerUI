"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[577],{2577:(z,c,a)=>{a.r(c),a.d(c,{CompanyUserSummaryReportModule:()=>E});var p=a(9808),C=a(2451),S=a(5439),x=a(7936),e=a(5e3),T=a(7528),U=a(9807),J=a(6705),d=a(3075),g=a(8076),i=a(7805),u=a(7322),y=a(7531),s=a(6856),h=a(4102),v=a(508);function R(o,m){if(1&o&&(e.TgZ(0,"mat-option",28),e._uU(1),e.qZA()),2&o){const t=m.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij("",t.name," ")}}function F(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",4)(1,"mat-form-field",5)(2,"mat-label"),e._uU(3,"Firma"),e.qZA(),e.TgZ(4,"mat-select",25),e.NdJ("ngModelChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l._companyId=r)}),e.TgZ(5,"mat-option",26),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r._companyId=null)}),e._uU(6,"Se\xe7iniz"),e.qZA(),e.YNc(7,R,2,2,"mat-option",27),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t._companyId),e.xp6(3),e.Q6J("ngForOf",t._companyList)}}const M=function(){return[25,50,100]};let D=(()=>{class o{constructor(t,n,r){this.reportService=t,this.companyService=n,this.authService=r,this.userRole=null,this._startDate=S(new Date).add(-30,"day").toDate(),this._endDate=new Date}ngOnInit(){this.userRole=this.authService.currentUserValue.roleId,this.companyService.getCompanies().subscribe(n=>{this._companyList=n}),this.getDataSource(this._startDate,this._endDate,null)}getDataSource(t,n,r){const l=this.dateForrmat(t),N=this.dateForrmat(n);this.dataSource=new C.Z({key:"this",load:()=>x.r.handleGridResponse(this.reportService.getCompanyUserSummaryReport(l,N,r))})}dateForrmat(t){return(0,p.p6)(t,"MM.dd.yyyy","en-US")}filter(){this.getDataSource(this._startDate,this._endDate,this._companyId)}hasRole(t){let n=!1;return this.userRole==t&&(n=!0),n}onExporting(t){t.fileName="Kullan\u0131c\u0131-Detay-Raporu"}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(T.r),e.Y36(U.J),e.Y36(J.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-company-user-summary-report"]],decls:34,vars:21,consts:[["id","company-summary-report_view",1,"card","mb-5","mb-xl-10"],[1,"card-header","cursor-pointer"],[1,"card-body","p-2"],[1,"row"],[1,"col-lg-4"],["appearance","fill",1,"example-full-width"],[3,"rangePicker"],["matStartDate","","matInput","","placeholder","Ba\u015flang\u0131\xe7 Tarihi",3,"ngModel","ngModelChange"],["matEndDate","","matInput","","placeholder","Biti\u015f Tarihi",3,"ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["class","col-lg-4",4,"ngIf"],[1,"btn","btn-small","btn-danger",3,"click"],["id","gridContainer",3,"dataSource","columnAutoWidth","showRowLines","showColumnLines","showBorders","onExporting"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible"],[3,"visible","highlightCaseSensitive"],[3,"enabled"],["dataField","companyName","dataType","string","caption","Firma"],["dataField","userName","dataType","string","caption","Kullan\u0131c\u0131"],["dataField","totalQueryCount","alignment","center","dataType","string","caption","Toplam Sorgu Adet"],["dataField","totalQueryPrice","alignment","center","dataType","number","caption","Toplam Sorgu Fiyat","format","\u20ba#,##0.##"],["dataField","totalNewQueryCount","alignment","center","dataType","string","caption","Yeni Sorgu Adet"],["dataField","totalRepeatQueryCount","alignment","center","dataType","string","caption","Tekrar Sorgu Adet"],[3,"ngModel","ngModelChange"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),e._uU(7,"Tarih aral\u0131\u011f\u0131 girmelisiniz.."),e.qZA(),e.TgZ(8,"mat-date-range-input",6)(9,"input",7),e.NdJ("ngModelChange",function(l){return n._startDate=l}),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(l){return n._endDate=l}),e.qZA()(),e._UZ(11,"mat-datepicker-toggle",9)(12,"mat-date-range-picker",null,10),e.qZA()(),e.YNc(14,F,8,2,"div",11),e.TgZ(15,"div",4)(16,"button",12),e.NdJ("click",function(){return n.filter()}),e._uU(17,"Filtrele"),e.qZA()()()()(),e.TgZ(18,"div",2)(19,"dx-data-grid",13),e.NdJ("onExporting",function(l){return n.onExporting(l)}),e._UZ(20,"dxo-paging",14)(21,"dxo-pager",15)(22,"dxo-filter-panel",16)(23,"dxo-filter-row",16)(24,"dxo-header-filter",16)(25,"dxo-search-panel",17)(26,"dxo-group-panel",16)(27,"dxo-export",18)(28,"dxi-column",19)(29,"dxi-column",20)(30,"dxi-column",21)(31,"dxi-column",22)(32,"dxi-column",23)(33,"dxi-column",24),e.qZA()()()),2&t){const r=e.MAs(13);e.xp6(8),e.Q6J("rangePicker",r),e.xp6(1),e.Q6J("ngModel",n._startDate),e.xp6(1),e.Q6J("ngModel",n._endDate),e.xp6(1),e.Q6J("for",r),e.xp6(3),e.Q6J("ngIf",n.hasRole(1)),e.xp6(5),e.Q6J("dataSource",n.dataSource)("columnAutoWidth",!0)("showRowLines",!1)("showColumnLines",!1)("showBorders",!1),e.xp6(1),e.Q6J("pageSize",25),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(20,M)),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!1)("highlightCaseSensitive",!0),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("enabled",!0)}},dependencies:[p.sg,p.O5,d.Fj,d.JJ,d.On,g.e,i.qvW,i.tZE,i.Ak0,i.ecQ,i.I62,i.Een,i.ilc,i.sXh,i.XXE,u.KE,u.hX,u.R9,y.Nt,s.nW,s.wx,s.zY,s.By,s._g,h.gD,v.ey],encapsulation:2}),o})();var Z=a(4521),Q=a(4619),A=a(520),f=a(8705);let E=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,Z.Bz.forChild([{path:"",component:D}]),d.u5,d.UX,A.JF,Q.vi,g.x,u.lN,y.c,s.FA,v.XK,f.EC,f.K,h.LD]}),o})()}}]);
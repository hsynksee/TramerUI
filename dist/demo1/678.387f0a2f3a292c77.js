"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[678],{9678:(B,c,n)=>{n.r(c),n.d(c,{CompanyUserDetailReportModule:()=>z});var p=n(9808),T=n(2451),C=n(5439),D=n(7936),g=n(1664),e=n(5e3),S=n(7528),U=n(9807),F=n(6705),m=n(3075),y=n(8076),d=n(7805),Q=n(9828),u=n(7322),h=n(7531),s=n(6856),v=n(4102),f=n(508);function J(a,i){if(1&a&&(e.TgZ(0,"mat-option",34),e._uU(1),e.qZA()),2&a){const t=i.$implicit;e.Q6J("value",t.id),e.xp6(1),e.hij("",t.name," ")}}function M(a,i){if(1&a){const t=e.EpF();e.TgZ(0,"div",4)(1,"mat-form-field",5)(2,"mat-label"),e._uU(3,"Firma"),e.qZA(),e.TgZ(4,"mat-select",31),e.NdJ("ngModelChange",function(r){e.CHM(t);const l=e.oxw();return e.KtG(l._companyId=r)}),e.TgZ(5,"mat-option",32),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r._companyId=null)}),e._uU(6,"Se\xe7iniz"),e.qZA(),e.YNc(7,J,2,2,"mat-option",33),e.qZA()()()}if(2&a){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t._companyId),e.xp6(3),e.Q6J("ngForOf",t._companyList)}}const R=function(a,i){return{"background-color":a,color:i,display:"inline-block","align-items":"center","justify-content":"center",padding:"5px","border-radius":"11px"}};function Z(a,i){if(1&a&&(e.TgZ(0,"div",35)(1,"span",36),e._uU(2),e.qZA()()),2&a){const t=i.$implicit;e.Q6J("ngStyle",e.WLB(2,R,t.value?"#dfffea":"#FFEEF3",t.value?"var(--bs-success)":"var(--bs-danger)")),e.xp6(2),e.Oqu(t.value?"Evet":"Hay\u0131r")}}function E(a,i){if(1&a&&(e.TgZ(0,"div",37)(1,"span",36),e._uU(2),e.qZA()()),2&a){const t=i.$implicit,o=e.oxw();e.xp6(2),e.Oqu(o.tramerQueryTypeLabelMapping[t.value])}}const A=function(){return[25,50,100]};let N=(()=>{class a{constructor(t,o,r){this.reportService=t,this.companyService=o,this.authService=r,this.userRole=null,this._startDate=C(new Date).add(-30,"day").toDate(),this._endDate=new Date,this.tramerQueryTypeLabelMapping=g.S,this.tramerQueryTypeSources=Object.values(g.s).filter(l=>"number"==typeof l)}ngOnInit(){this.userRole=this.authService.currentUserValue.roleId,this.companyService.getCompanies().subscribe(o=>{this._companyList=o}),this.getDataSource(this._startDate,this._endDate,null)}getDataSource(t,o,r){const l=this.dateForrmat(t),L=this.dateForrmat(o);this.dataSource=new T.Z({key:"this",load:()=>D.r.handleGridResponse(this.reportService.getCompanyUserDetailReport(l,L,r))})}dateForrmat(t){return(0,p.p6)(t,"MM.dd.yyyy","en-US")}filter(){this.getDataSource(this._startDate,this._endDate,this._companyId)}hasRole(t){let o=!1;return this.userRole==t&&(o=!0),o}onExporting(t){t.fileName="Kullan\u0131c\u0131-Raporu"}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(S.r),e.Y36(U.J),e.Y36(F.e))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company-user-detail-report"]],decls:40,vars:23,consts:[["id","company-summary-report_view",1,"card","mb-5","mb-xl-10"],[1,"card-header","cursor-pointer"],[1,"card-body","p-2"],[1,"row"],[1,"col-lg-4"],["appearance","fill",1,"example-full-width"],[3,"rangePicker"],["matStartDate","","matInput","","placeholder","Ba\u015flang\u0131\xe7 Tarihi",3,"ngModel","ngModelChange"],["matEndDate","","matInput","","placeholder","Biti\u015f Tarihi",3,"ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["class","col-lg-4",4,"ngIf"],[1,"btn","btn-small","btn-danger",3,"click"],["id","gridContainer",3,"dataSource","columnAutoWidth","showRowLines","showColumnLines","showBorders","onExporting"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible"],[3,"visible","highlightCaseSensitive"],[3,"enabled"],["dataField","companyName","dataType","string","caption","Firma"],["dataField","userName","dataType","string","caption","Kullan\u0131c\u0131"],["dataField","queryDate","dataType","date","caption","Sorgu Tarihi","format","dd/MM/yyyy HH:mm"],["dataField","tramerQueryType","cellTemplate","cellTramerQueryTypeTemplate","dataType","string","caption","Sorgu Tipi"],["dataField","tramerQuery","dataType","string","caption","Sorgu Parametresi"],["dataField","response","dataType","string","caption","Sorgu Sonucu","width","180"],["dataField","price","alignment","center","dataType","number","caption","Toplam Sorgu Fiyat","format","\u20ba#,##0.##"],["dataField","isExistQuery","cellTemplate","cellIsExistQueryTemplate","dataType","string","caption","Tekrarl\u0131 Sorgu"],["dataField","oldQueryDate","dataType","date","caption","\xd6nceki Sorgu Tarihi","format","dd/MM/yyyy HH:mm"],["dataField","oldResponse","dataType","string","caption","\xd6nceki Sorgu Sonucu","width","180"],["id","is-exist-query",3,"ngStyle",4,"dxTemplate","dxTemplateOf"],["id","tramer-query-type",4,"dxTemplate","dxTemplateOf"],[3,"ngModel","ngModelChange"],[3,"click"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["id","is-exist-query",3,"ngStyle"],["mat-button","","color","primary"],["id","tramer-query-type"]],template:function(t,o){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"mat-form-field",5)(6,"mat-label"),e._uU(7,"Tarih aral\u0131\u011f\u0131 girmelisiniz.."),e.qZA(),e.TgZ(8,"mat-date-range-input",6)(9,"input",7),e.NdJ("ngModelChange",function(l){return o._startDate=l}),e.qZA(),e.TgZ(10,"input",8),e.NdJ("ngModelChange",function(l){return o._endDate=l}),e.qZA()(),e._UZ(11,"mat-datepicker-toggle",9)(12,"mat-date-range-picker",null,10),e.qZA()(),e.YNc(14,M,8,2,"div",11),e.TgZ(15,"div",4)(16,"button",12),e.NdJ("click",function(){return o.filter()}),e._uU(17,"Filtrele"),e.qZA()()()()(),e.TgZ(18,"div",2)(19,"dx-data-grid",13),e.NdJ("onExporting",function(l){return o.onExporting(l)}),e._UZ(20,"dxo-paging",14)(21,"dxo-pager",15)(22,"dxo-filter-panel",16)(23,"dxo-filter-row",16)(24,"dxo-header-filter",16)(25,"dxo-search-panel",17)(26,"dxo-group-panel",16)(27,"dxo-export",18)(28,"dxi-column",19)(29,"dxi-column",20)(30,"dxi-column",21)(31,"dxi-column",22)(32,"dxi-column",23)(33,"dxi-column",24)(34,"dxi-column",25)(35,"dxi-column",26)(36,"dxi-column",27)(37,"dxi-column",28),e.YNc(38,Z,3,5,"div",29),e.YNc(39,E,3,1,"div",30),e.qZA()()()),2&t){const r=e.MAs(13);e.xp6(8),e.Q6J("rangePicker",r),e.xp6(1),e.Q6J("ngModel",o._startDate),e.xp6(1),e.Q6J("ngModel",o._endDate),e.xp6(1),e.Q6J("for",r),e.xp6(3),e.Q6J("ngIf",o.hasRole(1)),e.xp6(5),e.Q6J("dataSource",o.dataSource)("columnAutoWidth",!0)("showRowLines",!1)("showColumnLines",!1)("showBorders",!1),e.xp6(1),e.Q6J("pageSize",25),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(22,A)),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!1)("highlightCaseSensitive",!0),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("enabled",!0),e.xp6(11),e.Q6J("dxTemplateOf","cellIsExistQueryTemplate"),e.xp6(1),e.Q6J("dxTemplateOf","cellTramerQueryTypeTemplate")}},dependencies:[p.sg,p.O5,p.PC,m.Fj,m.JJ,m.On,y.e,d.qvW,d.tZE,d.Ak0,d.ecQ,d.I62,d.Een,d.ilc,d.sXh,d.XXE,Q.p6,u.KE,u.hX,u.R9,h.Nt,s.nW,s.wx,s.zY,s.By,s._g,v.gD,f.ey],encapsulation:2}),a})();var I=n(4521),b=n(520),O=n(4619),x=n(8705);let z=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[p.ez,I.Bz.forChild([{path:"",component:N}]),m.u5,m.UX,b.JF,O.vi,y.x,u.lN,h.c,s.FA,f.XK,x.EC,x.K,v.LD]}),a})()}}]);
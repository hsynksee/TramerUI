"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[813],{5813:(M,d,n)=>{n.r(d),n.d(d,{CompaniesModule:()=>B});var c=n(9808),v=n(7290),f=n(7936),x=n(5226),h=n.n(x),t=n(5e3),C=n(9807),b=n(4383),m=n(4521),p=n(4619),u=n(8076),r=n(7805),T=n(9828);function y(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,l=t.oxw();return t.KtG(l.setCompanyStatus(o))}),t._UZ(1,"span",22),t.qZA()}2&i&&(t.xp6(1),t.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr011.svg"))}function S(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",26),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,l=t.oxw();return t.KtG(l.setCompanyStatus(o))}),t._UZ(1,"span",22),t.qZA()}2&i&&(t.xp6(1),t.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr012.svg"))}function A(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div")(1,"a",21),t.NdJ("click",function(){const l=t.CHM(e).$implicit,N=t.oxw();return t.KtG(N.routeToEditCompany(l))}),t._UZ(2,"span",22),t.qZA(),t.YNc(3,y,2,1,"a",23),t.YNc(4,S,2,1,"a",24),t.qZA()}if(2&i){const e=a.$implicit;t.xp6(2),t.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen004.svg"),t.xp6(1),t.Q6J("ngIf",e.row.data.isActive),t.xp6(1),t.Q6J("ngIf",!e.row.data.isActive)}}const J=function(i,a){return{"background-color":i,color:a,display:"inline-block","align-items":"center","justify-content":"center",padding:"5px","border-radius":"11px"}};function F(i,a){if(1&i&&(t.TgZ(0,"div",27)(1,"span",28),t._uU(2),t.qZA()()),2&i){const e=a.$implicit;t.Q6J("ngStyle",t.WLB(2,J,e.value?"#dfffea":"#FFEEF3",e.value?"var(--bs-success)":"var(--bs-danger)")),t.xp6(2),t.Oqu(e.value?"Aktif":"Pasif")}}const Z=function(){return[25,50,100]};let w=(()=>{class i{constructor(e,s,o){this.companyService=e,this.toastrService=s,this.router=o}ngOnInit(){this.dataSource=new v.Z({key:"this",load:()=>f.r.handleGridResponse(this.companyService.getCompanies())})}setCompanyStatus(e){this.isActiveMessage=e.row.data.isActive?"Pasif":"Aktif",h()({title:this.isActiveMessage+" Yapmak \u0130stedi\u011finize Emin misiniz?",text:"'"+e.data.name+"' Firmas\u0131 "+this.isActiveMessage+" yap\u0131lacakt\u0131r!",type:"question",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Evet, "+this.isActiveMessage+" Yap",cancelButtonText:"Hay\u0131r"}).then(s=>{s.value&&(this.message="",this.companyService.updateCompanyStatus(e.row.data.id).subscribe(o=>{this.dataSource.reload(),this.toastrService.success("\u0130\u015flem Ba\u015far\u0131l\u0131")},o=>{o.error.messages.forEach(l=>{this.message+=l+". "}),this.toastrService.error(this.message,"Hata")}))})}routeToCreateCompany(){this.router.navigate(["/company-create"])}routeToEditCompany(e){this.router.navigate(["/company-edit/"+e.row.data.id])}onExporting(e){e.fileName="Firmalar"}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.J),t.Y36(b._W),t.Y36(m.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-companies"]],decls:25,vars:20,consts:[["id","companies_view",1,"card","mb-5","mb-xl-10"],[1,"card-header","cursor-pointer"],[1,"card-title","m-0"],[1,"fw-bolder","m-0"],[1,"btn","btn-sm","btn-danger","align-self-center",3,"click"],[1,"card-body","p-2"],["id","gridContainer",3,"dataSource","columnAutoWidth","showRowLines","showColumnLines","showBorders","onExporting"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible"],[3,"visible","highlightCaseSensitive"],[3,"enabled"],["dataField","name","dataType","string","caption","Firma"],["dataField","taxNumber","alignment","center","dataType","string","caption","Vergi Numaras\u0131"],["dataField","taxOffice","dataType","string","caption","Vergi Adresi"],["dataField","phone","alignment","center","dataType","string","caption","Telefon"],["dataField","queryPrice","alignment","center","dataType","number","caption","Sorgu Fiyat\u0131","format","\u20ba#,##0.##"],["dataField","isActive","cellTemplate","cellStateTemplate","dataType","string","caption","Durum"],["type","buttons","caption","\u0130\u015flemler","cellTemplate","cellBtnTemplate",3,"width","fixed"],[4,"dxTemplate","dxTemplateOf"],["id","custom-cell-for-statition",3,"ngStyle",4,"dxTemplate","dxTemplateOf"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],["class","btn btn-icon btn-bg-light btn-active-color-danger btn-sm","title","Pasif Yap",3,"click",4,"ngIf"],["class","btn btn-icon btn-bg-light btn-active-color-danger btn-sm","title","Aktif Yap",3,"click",4,"ngIf"],["title","Pasif Yap",1,"btn","btn-icon","btn-bg-light","btn-active-color-danger","btn-sm",3,"click"],["title","Aktif Yap",1,"btn","btn-icon","btn-bg-light","btn-active-color-danger","btn-sm",3,"click"],["id","custom-cell-for-statition",3,"ngStyle"],["mat-button","","color","primary"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"h3",3),t.qZA(),t.TgZ(4,"a",4),t.NdJ("click",function(){return s.routeToCreateCompany()}),t._uU(5," Yeni Firma Ekle "),t.qZA()(),t.TgZ(6,"div",5)(7,"dx-data-grid",6),t.NdJ("onExporting",function(l){return s.onExporting(l)}),t._UZ(8,"dxo-paging",7)(9,"dxo-pager",8)(10,"dxo-filter-panel",9)(11,"dxo-filter-row",9)(12,"dxo-header-filter",9)(13,"dxo-search-panel",10)(14,"dxo-group-panel",9)(15,"dxo-export",11)(16,"dxi-column",12)(17,"dxi-column",13)(18,"dxi-column",14)(19,"dxi-column",15)(20,"dxi-column",16)(21,"dxi-column",17)(22,"dxi-column",18),t.YNc(23,A,5,3,"div",19),t.YNc(24,F,3,5,"div",20),t.qZA()()()),2&e&&(t.xp6(7),t.Q6J("dataSource",s.dataSource)("columnAutoWidth",!0)("showRowLines",!1)("showColumnLines",!1)("showBorders",!1),t.xp6(1),t.Q6J("pageSize",25),t.xp6(1),t.Q6J("showPageSizeSelector",!0)("allowedPageSizes",t.DdM(19,Z)),t.xp6(1),t.Q6J("visible",!1),t.xp6(1),t.Q6J("visible",!0),t.xp6(1),t.Q6J("visible",!1),t.xp6(1),t.Q6J("visible",!0)("highlightCaseSensitive",!0),t.xp6(1),t.Q6J("visible",!1),t.xp6(1),t.Q6J("enabled",!0),t.xp6(7),t.Q6J("width",110)("fixed",!0),t.xp6(1),t.Q6J("dxTemplateOf","cellBtnTemplate"),t.xp6(1),t.Q6J("dxTemplateOf","cellStateTemplate"))},dependencies:[c.O5,c.PC,p.d$,u.e,r.qvW,r.tZE,r.Ak0,r.ecQ,r.I62,r.Een,r.ilc,r.sXh,r.XXE,T.p6],encapsulation:2}),i})();var g=n(3075),E=n(520),Q=n(7322),Y=n(7531);let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,m.Bz.forChild([{path:"",component:w}]),g.u5,g.UX,E.JF,p.vi,u.x,Q.lN,Y.c]}),i})()}}]);
"use strict";(self.webpackChunkdemo1=self.webpackChunkdemo1||[]).push([[219],{2219:(H,u,n)=>{n.r(u),n.d(u,{UsersModule:()=>z});var c=n(9808),U=n(7290),_=n(7936),g=n(5584),b=n(5226),y=n.n(b),e=n(5e3),S=n(8208),J=n(9807),A=n(6705),Z=n(4383),v=n(4521),d=n(3075),f=n(4619),x=n(8076),r=n(7805),F=n(9828),m=n(7322),h=n(4102),T=n(508);function M(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"mat-option",28),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.onChangeCompany())}),e._uU(1),e.qZA()}if(2&i){const t=o.$implicit;e.Q6J("value",t.id),e.xp6(1),e.Oqu(t.name)}}function Q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",23)(1,"mat-form-field",24)(2,"mat-label"),e._uU(3,"Firma"),e.qZA(),e.TgZ(4,"mat-select",25),e.NdJ("ngModelChange",function(a){e.CHM(t);const l=e.oxw();return e.KtG(l._companyId=a)}),e.TgZ(5,"mat-option",26),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a._companyId=null)})("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onChangeCompany())}),e._uU(6,"Se\xe7iniz"),e.qZA(),e.YNc(7,M,2,2,"mat-option",27),e.qZA()()()}if(2&i){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t._companyId),e.xp6(3),e.Q6J("ngForOf",t._companyList)}}function E(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"a",33),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.setUserActive(a))}),e._UZ(1,"span",30),e.qZA()}2&i&&(e.xp6(1),e.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr011.svg"))}function w(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"a",34),e.NdJ("click",function(){e.CHM(t);const a=e.oxw().$implicit,l=e.oxw();return e.KtG(l.setUserActive(a))}),e._UZ(1,"span",30),e.qZA()}2&i&&(e.xp6(1),e.Q6J("inlineSVG","./assets/media/icons/duotune/arrows/arr012.svg"))}function N(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div")(1,"a",29),e.NdJ("click",function(){const l=e.CHM(t).$implicit,p=e.oxw();return e.KtG(p.editUserClick(l))}),e._UZ(2,"span",30),e.qZA(),e.YNc(3,E,2,1,"a",31),e.YNc(4,w,2,1,"a",32),e.qZA()}if(2&i){const t=o.$implicit;e.xp6(2),e.Q6J("inlineSVG","./assets/media/icons/duotune/general/gen004.svg"),e.xp6(1),e.Q6J("ngIf",t.row.data.isActive),e.xp6(1),e.Q6J("ngIf",!t.row.data.isActive)}}function Y(i,o){if(1&i&&(e.TgZ(0,"div",35)(1,"span",36),e._uU(2),e.qZA()()),2&i){const t=o.$implicit,s=e.oxw();e.xp6(2),e.Oqu(s.userRoleLabelMapping[t.value])}}const k=function(i,o){return{"background-color":i,color:o,display:"inline-block","align-items":"center","justify-content":"center",padding:"5px","border-radius":"11px"}};function O(i,o){if(1&i&&(e.TgZ(0,"div",37)(1,"span",36),e._uU(2),e.qZA()()),2&i){const t=o.$implicit;e.Q6J("ngStyle",e.WLB(2,k,t.value?"#dfffea":"#FFEEF3",t.value?"var(--bs-success)":"var(--bs-danger)")),e.xp6(2),e.Oqu(t.value?"Aktif":"Pasif")}}const I=function(){return[25,50,100]};let R=(()=>{class i{constructor(t,s,a,l,p){this.userService=t,this.companyService=s,this.authService=a,this.toastrService=l,this.router=p,this.userRole=null,this.userRoleLabelMapping=g.o,this.userRoleSources=Object.values(g.t).filter(L=>"number"==typeof L)}ngOnInit(){this.userRole=this.authService.currentUserValue.roleId,this.companyService.getCompanies().subscribe(s=>{this._companyList=s}),this.getUsers()}getUsers(){this.dataSource=new U.Z({key:"this",load:()=>_.r.handleGridResponse(this.userService.getUsers(this._companyId))})}onChangeCompany(){this.getUsers()}setUserActive(t){this.isActiveMessage=t.row.data.isActive?"Pasif":"Aktif",y()({title:this.isActiveMessage+" Yapmak \u0130stedi\u011finize Emin misiniz?",text:"'"+t.data.name+"' isimli kullan\u0131c\u0131 "+this.isActiveMessage+" yap\u0131lacakt\u0131r!",type:"question",showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"Evet, "+this.isActiveMessage+" Yap",cancelButtonText:"Hay\u0131r"}).then(s=>{s.value&&(this.message="",this.userService.setUserActive(t.row.data.id).subscribe(a=>{this.dataSource.reload(),this.toastrService.success("\u0130\u015flem Ba\u015far\u0131l\u0131")},a=>{a.error.messages.forEach(l=>{this.message+=l+". "}),this.toastrService.error(this.message,"Hata")}))})}editUserClick(t){this.router.navigate(["/user-update/"+t.row.data.id])}routeToCreateUser(){this.router.navigate(["/user-create"])}hasRole(t){let s=!1;return this.userRole==t&&(s=!0),s}onExporting(t){t.fileName="Kullan\u0131c\u0131lar"}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(S.K),e.Y36(J.J),e.Y36(A.e),e.Y36(Z._W),e.Y36(v.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-users"]],decls:29,vars:22,consts:[["id","users_view",1,"card","mb-5","mb-xl-10"],[1,"card-header","cursor-pointer"],[1,"card-body","p-2"],[1,"row"],["class","col-lg-4",4,"ngIf"],[1,"btn","btn-sm","btn-danger","align-self-center",3,"click"],["id","gridContainer",3,"dataSource","columnAutoWidth","showRowLines","showColumnLines","showBorders","onExporting"],[3,"pageSize"],[3,"showPageSizeSelector","allowedPageSizes"],[3,"visible"],[3,"visible","highlightCaseSensitive"],[3,"enabled"],["dataField","companyName","dataType","string","caption","Firma"],["dataField","roleId","cellTemplate","cellUserRoleTemplate","dataType","string","caption","Role"],["dataField","name","dataType","string","caption","\u0130sim"],["dataField","surname","dataType","string","caption","Soyisim"],["dataField","email","dataType","string","caption","Mail"],["dataField","phoneNumber","alignment","center","dataType","string","caption","Telefon"],["dataField","isActive","cellTemplate","cellStateTemplate","dataType","string","caption","Durum"],["type","buttons","caption","\u0130\u015flemler","cellTemplate","cellBtnTemplate",3,"width","fixed"],[4,"dxTemplate","dxTemplateOf"],["id","user-role",4,"dxTemplate","dxTemplateOf"],["id","custom-cell-for-statition",3,"ngStyle",4,"dxTemplate","dxTemplateOf"],[1,"col-lg-4"],["appearance","fill",1,"example-full-width"],[3,"ngModel","ngModelChange"],[3,"click"],[3,"value","click",4,"ngFor","ngForOf"],[3,"value","click"],[1,"btn","btn-icon","btn-bg-light","btn-active-color-primary","btn-sm","me-1",3,"click"],[1,"svg-icon","svg-icon-2",3,"inlineSVG"],["class","btn btn-icon btn-bg-light btn-active-color-danger btn-sm","title","Pasif Yap",3,"click",4,"ngIf"],["class","btn btn-icon btn-bg-light btn-active-color-danger btn-sm","title","Aktif Yap",3,"click",4,"ngIf"],["title","Pasif Yap",1,"btn","btn-icon","btn-bg-light","btn-active-color-danger","btn-sm",3,"click"],["title","Aktif Yap",1,"btn","btn-icon","btn-bg-light","btn-active-color-danger","btn-sm",3,"click"],["id","user-role"],["mat-button","","color","primary"],["id","custom-cell-for-statition",3,"ngStyle"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"br"),e.TgZ(2,"div",1)(3,"div",2)(4,"div",3),e.YNc(5,Q,8,2,"div",4),e.qZA()(),e.TgZ(6,"a",5),e.NdJ("click",function(){return s.routeToCreateUser()}),e._uU(7," Yeni Kullan\u0131c\u0131 Ekle "),e.qZA()(),e.TgZ(8,"div",2)(9,"dx-data-grid",6),e.NdJ("onExporting",function(l){return s.onExporting(l)}),e._UZ(10,"dxo-paging",7)(11,"dxo-pager",8)(12,"dxo-filter-panel",9)(13,"dxo-filter-row",9)(14,"dxo-header-filter",9)(15,"dxo-search-panel",10)(16,"dxo-group-panel",9)(17,"dxo-export",11)(18,"dxi-column",12)(19,"dxi-column",13)(20,"dxi-column",14)(21,"dxi-column",15)(22,"dxi-column",16)(23,"dxi-column",17)(24,"dxi-column",18)(25,"dxi-column",19),e.YNc(26,N,5,3,"div",20),e.YNc(27,Y,3,1,"div",21),e.YNc(28,O,3,5,"div",22),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("ngIf",s.hasRole(1)),e.xp6(4),e.Q6J("dataSource",s.dataSource)("columnAutoWidth",!0)("showRowLines",!1)("showColumnLines",!1)("showBorders",!1),e.xp6(1),e.Q6J("pageSize",25),e.xp6(1),e.Q6J("showPageSizeSelector",!0)("allowedPageSizes",e.DdM(21,I)),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!0),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("visible",!0)("highlightCaseSensitive",!0),e.xp6(1),e.Q6J("visible",!1),e.xp6(1),e.Q6J("enabled",!0),e.xp6(8),e.Q6J("width",110)("fixed",!0),e.xp6(1),e.Q6J("dxTemplateOf","cellBtnTemplate"),e.xp6(1),e.Q6J("dxTemplateOf","cellUserRoleTemplate"),e.xp6(1),e.Q6J("dxTemplateOf","cellStateTemplate"))},dependencies:[c.sg,c.O5,c.PC,d.JJ,d.On,f.d$,x.e,r.qvW,r.tZE,r.Ak0,r.ecQ,r.I62,r.Een,r.ilc,r.sXh,r.XXE,F.p6,m.KE,m.hX,h.gD,T.ey],encapsulation:2}),i})();var G=n(7531),K=n(520),B=n(6856),C=n(8705);let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,v.Bz.forChild([{path:"",component:R}]),d.u5,d.UX,K.JF,f.vi,x.x,m.lN,G.c,B.FA,T.XK,C.EC,C.K,h.LD]}),i})()}}]);
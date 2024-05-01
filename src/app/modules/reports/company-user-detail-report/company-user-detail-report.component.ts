import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import CustomStore from 'devextreme/data/custom_store';
import * as moment from 'moment';
import { GridUtil } from 'src/app/_metronic/kt/_utils/GridUtil';
import { TramerQueryTypeEnum, TramerQueryTypeLabelMapping } from 'src/app/core/enums/tramer-query-type.enum';
import { UserRoleEnum } from 'src/app/core/enums/user-role.enum';
import { CompanyModel } from 'src/app/core/models/company/company.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { ReportService } from 'src/app/core/services/report/report.service';

@Component({
  selector: 'app-company-user-detail-report',
  templateUrl: './company-user-detail-report.component.html'
})
export class CompanyUserDetailReportComponent implements OnInit {
  userRole: UserRoleEnum = null;  
  dataSource: CustomStore;
  message: string;
  isActiveMessage: string;
  
  _startDate: Date = moment(new Date()).add(-30,'day').toDate();
  _endDate: Date = new Date();
  _companyId?: number;

  _companyName: string = "Tüm Firmalar";
  _companyFilterList: any;
  
  tramerQueryTypeLabelMapping = TramerQueryTypeLabelMapping;
  tramerQueryTypeSources = Object.values(TramerQueryTypeEnum).filter(value => typeof value === 'number');

  constructor(private reportService: ReportService, 
    private companyService: CompanyService,
    private authService: AuthService) { }

  ngOnInit() {
    var currentUser = this.authService.currentUserValue;
    this.userRole = currentUser.roleId;

    this._companyFilterList = [
      { value: null, name: "Tüm Firmalar" },
    ];

    this.companyService.getCompanies().subscribe(res => {
      res.forEach(e => {
        this._companyFilterList.push({ value: e.id, name: e.name });
      })
     });
    this.getDataSource(this._startDate, this._endDate, null);
  }

  getDataSource(startDate, endDate, companyId){
    const formattedStartDate = this.dateForrmat(startDate);
    const formattedEndDate = this.dateForrmat(endDate);
    
    this.dataSource = new CustomStore({
      key: 'this',
      load: () => GridUtil.handleGridResponse(this.reportService.getCompanyUserDetailReport(formattedStartDate, formattedEndDate, companyId))
    });
  }
  
  dateForrmat(date){
    const format = 'MM.dd.yyyy';
    const locale = 'en-US';
    
    return formatDate(date, format, locale);
  }

  filter(){
    this.getDataSource(this._startDate, this._endDate, this._companyId);
  }

  hasRole(role: UserRoleEnum) {
    let returnVal = false;
    if(this.userRole == role){
        returnVal = true;
    }
    return returnVal;
  }

  onExporting(event){
    event.fileName = "Kullanıcı-Detay-Raporu";
  }

  onChangeCompany(event) {
    this._companyId = event.itemData.value;
    this._companyName = event.itemData.name;
    this.filter();
  }

  onChangeStartDate(event) {
    this._startDate = event.value;
  }

  onChangeEndDate(event) {
    if (event.value != null){
      this._endDate = event.value;
      this.filter();
    }
  }
}

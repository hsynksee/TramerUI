import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomStore from 'devextreme/data/custom_store';
import { GridUtil } from 'src/app/_metronic/kt/_utils/GridUtil';
import { ReportService } from 'src/app/core/services/report/report.service';
import * as moment from 'moment';
import { formatDate } from '@angular/common';
import { CompanyModel } from 'src/app/core/models/company/company.model';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
  selector: 'app-company-summary-report',
  templateUrl: './company-summary-report.component.html'
})
export class CompanySummaryReportComponent implements OnInit {
  dataSource: CustomStore;
  message: string;
  isActiveMessage: string;
  _startDate: Date = moment(new Date()).add(-30, 'day').toDate();
  _endDate: Date = new Date();
  _companyId?: number;

  _companyName: string = "Tüm Firmalar";
  _companyFilterList: any;

  constructor(private reportService: ReportService, private companyService: CompanyService) { }

  ngOnInit() {
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

  getDataSource(startDate, endDate, companyId) {
    const formattedStartDate = this.dateForrmat(startDate);
    const formattedEndDate = this.dateForrmat(endDate);

    this.dataSource = new CustomStore({
      key: 'this',
      load: () => GridUtil.handleGridResponse(this.reportService.getCompanySummaryReport(formattedStartDate, formattedEndDate, companyId))
    });
  }

  dateForrmat(date) {
    const format = 'MM.dd.yyyy';
    const locale = 'en-US';

    return formatDate(date, format, locale);
  }

  filter() {
    this.getDataSource(this._startDate, this._endDate, this._companyId);
  }

  onExporting(event) {
    event.fileName = "Firma-Raporu";
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

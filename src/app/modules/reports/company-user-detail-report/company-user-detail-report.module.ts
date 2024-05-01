import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyUserDetailReportComponent } from './company-user-detail-report.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { DxDataGridModule, DxDropDownButtonModule } from 'devextreme-angular';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { NgxMatDateAdapter, NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MatSelectModule } from '@angular/material/select';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CustomDateAdapter } from 'src/app/core/helper/custom-date-adapter';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReportResponseDetailComponent } from '../report-response-detail/report-response-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MatTabsModule,
    MatButtonToggleModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyUserDetailReportComponent,
      },
    ]),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InlineSVGModule,
    DxDataGridModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
    MatSelectModule,
    DxDropDownButtonModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "tr-TR" },
    { provide: NgxMatDateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: "{ useUtc: true }"}
  ],
  declarations: [CompanyUserDetailReportComponent,
  ReportResponseDetailComponent]
})
export class CompanyUserDetailReportModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyUserSummaryReportComponent } from './company-user-summary-report.component';
import { RouterModule } from '@angular/router';
import { DxDataGridModule, DxDropDownButtonModule } from 'devextreme-angular';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatDateAdapter, NgxMatDatetimePickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { CustomDateAdapter } from 'src/app/core/helper/custom-date-adapter';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CompanyUserSummaryReportComponent,
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
  declarations: [CompanyUserSummaryReportComponent]
})
export class CompanyUserSummaryReportModule { }

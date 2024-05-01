import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { CompanySummaryReportModel } from '../../models/report/company-summary-report.model';
import { Observable, map } from 'rxjs';
import { BaseResponse } from '../../models/base-response';
import { CompanyUserSummaryReportModel } from '../../models/report/company-user-summary-report.model';
import { CompanyUserDetailReportModel } from '../../models/report/company-user-detail-report.model';

const API_URL = `${environment.apiUrl}/Company`;

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  httpHeaders: HttpHeaders;

  constructor(private http: HttpClient, private authService: AuthService) {
    const auth = this.authService.getAuthFromLocalStorage();
    if (!auth || !auth.access_token) {
      return undefined;
    }

    this.httpHeaders = new HttpHeaders({
      Authorization: `${auth.access_token}`,
    });
  }

  getCompanySummaryReport(startDate, endDate, companyId?): Observable<Array<CompanySummaryReportModel>> {
    var url = `${API_URL}/GetCompanySummaryReport?startDate=${startDate}&endDate=${endDate}`;

    if (companyId != null)
      url = url + `&companyId=${companyId}`;

    // return this.http.get(`${API_URL}/GetCompanySummaryReport?startDate=${startDate}&endDate=${endDate}&companyId=${companyId}`, {
    return this.http.get(url, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<Array<CompanySummaryReportModel>>) => res.data));
  }

  getCompanyUserSummaryReport(startDate, endDate, companyId?): Observable<Array<CompanyUserSummaryReportModel>> {
    var url = `${API_URL}/GetCompanyUserSummaryReport?startDate=${startDate}&endDate=${endDate}`;
    if (companyId != null)
      url = url + `&companyId=${companyId}`;
    // return this.http.get(`${API_URL}/GetCompanyUserSummaryReport?startDate=${startDate}&endDate=${endDate}&companyId=${companyId}`, {
    return this.http.get(url, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<Array<CompanyUserSummaryReportModel>>) => res.data));
  }

  getCompanyUserDetailReport(startDate, endDate, companyId?): Observable<Array<CompanyUserDetailReportModel>> {
    var url = `${API_URL}/GetCompanyUserDetailReport?startDate=${startDate}&endDate=${endDate}`;
    if (companyId != null)
      url = url + `&companyId=${companyId}`;
    // return this.http.get(`${API_URL}/GetCompanyUserDetailReport?startDate=${startDate}&endDate=${endDate}&companyId=${companyId}`, {
    return this.http.get(url, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<Array<CompanyUserDetailReportModel>>) => res.data));
  }
}

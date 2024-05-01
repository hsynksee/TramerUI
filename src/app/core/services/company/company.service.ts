import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { CompanyCreateModel } from '../../models/company/company-create.model';
import { CompanyUpdateModel } from '../../models/company/company-update.model';
import { Observable, map } from 'rxjs';
import { CompanyModel } from '../../models/company/company.model';
import { BaseResponse } from '../../models/base-response';

const API_URL = `${environment.apiUrl}/Company`;

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
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

  createCompany(createModel: CompanyCreateModel) {
    return this.http.post(`${API_URL}/CreateCompany`, createModel, {
      headers: this.httpHeaders
    })
  }
  
  updateCompany(updateModel: CompanyUpdateModel) {
    return this.http.put(`${API_URL}/UpdateCompany`, updateModel, {
      headers: this.httpHeaders
    })
  }

  getCompanies(status: boolean = null): Observable<Array<CompanyModel>> {
    var url = `${API_URL}/GetCompanies`;
    if (status != null)
      url += `?isActive=${status}`;

    return this.http.get(url, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<Array<CompanyModel>>) => res.data));
  }

  getCompanyDetail(id: number) {
    return this.http.get(`${API_URL}/GetCompanyById?id=${id}`, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<CompanyModel>) => res))
  }

  updateCompanyStatus(id: number) {
    return this.http.put(`${API_URL}/UpdateCompanyStatus?id=${id}`, null, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<boolean>) => res))
  }

}

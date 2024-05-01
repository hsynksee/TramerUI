import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { UserCreateModel } from '../../models/user/user-create.model';
import { UserUpdateModel } from '../../models/user/user-update.model';
import { UserModel } from '../../models/auth/user.model';
import { Observable, map } from 'rxjs';
import { BaseResponse } from '../../models/base-response';
import { ChangePasswordModel } from '../../models/user/change-password.model';

const API_URL = `${environment.apiUrl}/User`;

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  createUser(createModel: UserCreateModel) {
    return this.http.post(`${API_URL}/CreateUser`, createModel, {
      headers: this.httpHeaders
    })
  }

  updateUser(updateModel: UserUpdateModel) {
    return this.http.put(`${API_URL}/UpdateUser`, updateModel, {
      headers: this.httpHeaders
    })
  }

  getUsers(companyId?, status: boolean = null): Observable<Array<UserModel>> {
    let url = `${API_URL}/GetUsers`;
    let users: any

    if (companyId != null)
      users = this.getUserByCompanyId(companyId, status);
    else {
      if (status != null)
        url += `?isActive=${status}`;

      users = this.http.get(url, {
        headers: this.httpHeaders,
      }).pipe(map((res: BaseResponse<Array<UserModel>>) => res.data));
    }

    return users;
  }

  getUserDetail(id: number) {
    return this.http.get(`${API_URL}/GetUserById?id=${id}`, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<UserModel>) => res))
  }

  getUserByCompanyId(companyId: number, status: boolean = null): Observable<Array<UserModel>> {
    let url = `${API_URL}/GetUserByCompanyId?companyId=${companyId}`;
    if (status != null)
        url += `&isActive=${status}`;

    return this.http.get(url, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<Array<UserModel>>) => res.data));
  }

  setUserActive(id: number) {
    return this.http.put(`${API_URL}/SetUserActive?id=${id}`, null, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<boolean>) => res))
  }

  changePassword(changePasswordModel: ChangePasswordModel): Observable<BaseResponse<ChangePasswordModel>> {
    return this.http.put<BaseResponse<ChangePasswordModel>>(`${API_URL}/ChangePassword`, changePasswordModel, {
      headers: this.httpHeaders
    }).pipe(map((res: BaseResponse<ChangePasswordModel>) => res));
  }

}

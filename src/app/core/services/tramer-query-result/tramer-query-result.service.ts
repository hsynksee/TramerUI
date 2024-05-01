import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth/auth.service';
import { TramerQueryResultModel } from '../../models/tramer-query-result/tramer-query-result.model';
import { BaseResponse } from '../../models/base-response';
import { Observable, map } from 'rxjs';
import { TramerQueryTypeEnum } from '../../enums/tramer-query-type.enum';

const API_URL = `${environment.apiUrl}/TramerQueryResult`;

@Injectable({
  providedIn: 'root'
})
export class TramerQueryResultService {
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

  getTramerResult(queryType: TramerQueryTypeEnum, queryParameter: string, newQuery: boolean): Observable<BaseResponse<TramerQueryResultModel>> {
    return this.http.get(`${API_URL}/GetTramerResult?queryType=${queryType}&queryParameter=${queryParameter}&newQuery=${newQuery}`, {
      headers: this.httpHeaders,
    }).pipe(map((res: BaseResponse<TramerQueryResultModel>) => res));
  }

}

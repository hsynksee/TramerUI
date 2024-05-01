import { Component, Input, OnInit } from '@angular/core';
import { UserRoleEnum } from 'src/app/core/enums/user-role.enum';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-report-response-detail',
  templateUrl: './report-response-detail.component.html',
  styleUrls: ['./report-response-detail.component.scss']
})
export class ReportResponseDetailComponent implements OnInit {

  @Input() key: any;
  @Input() reportDetails: any;
  @Input() dataSource: any[];

  responseJsonData:any= {};
  oldResponseJsonData:any= {};
  isHasOldData=false;

  userRole: UserRoleEnum = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  var currentUser = this.authService.currentUserValue;
  this.userRole = currentUser.roleId;

  const oldResponseJsonString=this.key.oldResponse;

  this.oldResponseJsonData = this.userRole === 1 ? JSON.parse(oldResponseJsonString) : null;
  const jsonString = this.key.response;
  this.responseJsonData = JSON.parse(jsonString);

  }

}

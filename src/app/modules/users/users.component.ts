import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { ToastrService } from 'ngx-toastr';
import { GridUtil } from 'src/app/_metronic/kt/_utils/GridUtil';
import { UserRoleEnum, UserRoleLabelMapping } from 'src/app/core/enums/user-role.enum';
import { CompanyModel } from 'src/app/core/models/company/company.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { UserService } from 'src/app/core/services/user/user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
  userRole: UserRoleEnum = null;
  dataSource: DataSource;
  message: string;
  isActiveMessage: string;

  _companyId?: number;
  _companyName: string = "Tüm Firmalar";

  userRoleLabelMapping = UserRoleLabelMapping;
  userRoleSources = Object.values(UserRoleEnum).filter(value => typeof value === 'number');

  _status: boolean = true;

  _companyFilterList: any;
  _statusFilter: any;
  _statusFilterName: string = "Aktif";

  constructor(private userService: UserService,
    private companyService: CompanyService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    var currentUser = this.authService.currentUserValue;
    this.userRole = currentUser.roleId;
    
    this._companyFilterList = [
      { value: null, name: "Tüm Firmalar"},
    ]

    this._statusFilter = [
      { value: null, name: "Tümü"},
      { value: true, name: "Aktif", icon: 'check'},
      { value: false, name: "Pasif", icon: 'close'},
    ]

    this.companyService.getCompanies().subscribe(res => { 
      res.forEach(e => {
        this._companyFilterList.push({ value: e.id, name: e.name });
      })
    });

    this.getUsers();
  }

  getUsers(){
    this.dataSource = new DataSource({
      key: 'this',
      load: () => GridUtil.handleGridResponse(this.userService.getUsers(this._companyId, this._status))
    });
  }

  onChangeCompany(event){
    this._companyId = event.itemData.value;
    this._companyName = event.itemData.name;
    this.getUsers();
  }

  onChangeStatus(event){
    this._status = event.itemData.value;
    this._statusFilterName = event.itemData.name;
    this.getUsers();
  }

  setUserActive(e) {
    this.isActiveMessage = e.row.data.isActive ? "Pasif" : "Aktif";
    swal({
      title: this.isActiveMessage + " Yapmak İstediğinize Emin misiniz?",
      text: "'" + e.data.name + "' isimli kullanıcı " + this.isActiveMessage + " yapılacaktır!",
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Evet, ' + this.isActiveMessage + " Yap",
      cancelButtonText: 'Hayır',
    }).then((willDelete) => {
      if (willDelete.value) {
        this.message = '';
        this.userService.setUserActive(e.row.data.id).subscribe(res => {
          this.dataSource.reload();
          this.toastrService.success("İşlem Başarılı");
        },
          err => {
            err.error.messages.forEach(element => {
              this.message += element + '. ';
            });
            this.toastrService.error(this.message, "Hata");
          });
      }
    });
  }
  editUserClick(e){
    var id=e.row.data.id;
    this.router.navigate(['/user-update/' + e.row.data.id]);
  }
  routeToCreateUser(){
    this.router.navigate(['/user-create']);
  }
  hasRole(role: UserRoleEnum) {
    let returnVal = false;
    if(this.userRole == role){
        returnVal = true;
    }
    return returnVal;
  }

  onExporting(event){
    event.fileName = "Kullanıcılar";
  }
}

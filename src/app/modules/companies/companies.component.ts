import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import { ToastrService } from 'ngx-toastr';
import { GridUtil } from 'src/app/_metronic/kt/_utils/GridUtil';
import { UserRoleEnum } from 'src/app/core/enums/user-role.enum';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html'
})
export class CompaniesComponent implements OnInit {
  userRole: UserRoleEnum = null;
  dataSource: DataSource;
  message: string;
  isActiveMessage: string;

  _status: boolean = true;
  _statusFilter: any;
  _statusFilterName: string = "Aktif";

  constructor(private companyService: CompanyService, 
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) { }

  ngOnInit() {
    var currentUser = this.authService.currentUserValue;
    this.userRole = currentUser.roleId;

    this._statusFilter = [
      { value: null, name: "Tümü"},
      { value: true, name: "Aktif", icon: 'check'},
      { value: false, name: "Pasif", icon: 'close'},
    ]

    this.getCompanies();
  }

  getCompanies(){
    this.dataSource = new DataSource({
      key: 'this',
      load: () => GridUtil.handleGridResponse(this.companyService.getCompanies(this._status))
    });
  }

  setCompanyStatus(e) {
    this.isActiveMessage = e.row.data.isActive ? "Pasif" : "Aktif";
    swal({
      title: this.isActiveMessage + " Yapmak İstediğinize Emin misiniz?",
      text: "'" + e.data.name + "' Firması " + this.isActiveMessage + " yapılacaktır!",
      type: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'Evet, ' + this.isActiveMessage + " Yap",
      cancelButtonText: 'Hayır',
    }).then((willDelete) => {
      if (willDelete.value) {
        this.message = '';
        this.companyService.updateCompanyStatus(e.row.data.id).subscribe(res => {
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

  onChangeStatus(event){
    this._status = event.itemData.value;
    this._statusFilterName = event.itemData.name;
    this.getCompanies();
  }

  routeToCreateCompany(){
    this.router.navigate(['/company-create']);
  }

  routeToEditCompany(e){
    this.router.navigate(['/company-edit/' + e.row.data.id]);
  }

  onExporting(event){
    event.fileName = "Firmalar";
  }
}

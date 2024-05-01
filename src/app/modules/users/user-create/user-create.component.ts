import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, BehaviorSubject } from 'rxjs';
import { UserRoleEnum, UserRoleLabelMapping } from 'src/app/core/enums/user-role.enum';
import { CompanyModel } from 'src/app/core/models/company/company.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {
  userRole: UserRoleEnum = null;
  userRoleLabelMapping = UserRoleLabelMapping;
  userRoleEnumSource = Object.values(UserRoleEnum).filter(value => typeof value === 'number');
  
  _companyList: Array<CompanyModel>;
  _companyId?: number;

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  createUserForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    private userService: UserService,
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();

    var currentUser = this.authService.currentUserValue;
    this.userRole = currentUser.roleId;
    if (this.userRole != UserRoleEnum.SystemAdmin)
      this.userRoleEnumSource = this.userRoleEnumSource.filter(x => x != UserRoleEnum.SystemAdmin);
  }

  ngOnInit() {
    var currentUser = this.authService.currentUserValue;

    this.companyService.getCompanies().subscribe(res => { this._companyList = res; });
    this.createUserForm = this.fb.group({
      companyId: [null, Validators.required],
      roleId: [null, Validators.required],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required],
    });

    if (this.hasRole(UserRoleEnum.CompanyAdmin)) {
      this.createUserForm = this.fb.group({
        companyId: [currentUser.companyId, Validators.required],
        roleId: [null, Validators.required],
        name: ["", Validators.required],
        surname: ["", Validators.required],
        email: ["", [Validators.required, Validators.email]],
        phoneNumber: ["", Validators.required],
      });
    }
  }

  createUser() {
    this.isLoadingSubject.next(true);
    this.message = "";
    if (this.createUserForm.valid) {
      console.log(this.createUserForm.value);
      this.userService.createUser(this.createUserForm.value).subscribe(
        res => {
          this.toastrService.success("İşlem Başarılı");
          this.isLoadingSubject.next(false);
          this.router.navigate(['/users']);
        },
        err => {
          err.error.messages.forEach(element => {
            this.message += element + '. ';
          });
          this.toastrService.error(this.message, "Hata");
          this.isLoadingSubject.next(false);
        }
      );

    } else {
      this.toastrService.warning("Formu Kontrol Ediniz", "Uyarı");
      this.isLoadingSubject.next(false);
    }
  }

  hasRole(role: UserRoleEnum) {
    let returnVal = false;
    if (this.userRole == role) {
      returnVal = true;
    }
    return returnVal;
  }

}

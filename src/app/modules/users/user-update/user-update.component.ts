import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, BehaviorSubject, Subscription, Subject } from 'rxjs';
import { UserRoleEnum, UserRoleLabelMapping } from 'src/app/core/enums/user-role.enum';
import { CompanyModel } from 'src/app/core/models/company/company.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { CompanyService } from 'src/app/core/services/company/company.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  userRole: UserRoleEnum = null;
  @Input() id: number;
  _companyList: Array<CompanyModel>;
  _companyId?: number;

  userRoleLabelMapping = UserRoleLabelMapping;
  userRoleEnumSource = Object.values(UserRoleEnum).filter(value => typeof value === 'number');

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  private unsubscribe: Subscription[] = [];
  updateUserForm: FormGroup;

  _onDestroy = new Subject<void>();
  message: string;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private companyService: CompanyService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
    var currentUser = this.authService.currentUserValue;
    this.userRole = currentUser.roleId;
    if (this.userRole != UserRoleEnum.SystemAdmin)
      this.userRoleEnumSource = this.userRoleEnumSource.filter(x => x != UserRoleEnum.SystemAdmin);
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe(res => { this._companyList = res; });
    this.id = this.activatedRoute.snapshot.params.id;
    this.userService.getUserDetail(this.id).subscribe(res => {
      this.updateUserForm.controls["id"].setValue(res.data.id);
      this.updateUserForm.controls["roleId"].setValue(res.data.roleId);
      this.updateUserForm.controls["companyId"].setValue(res.data.companyId);
      this.updateUserForm.controls["name"].setValue(res.data.name);
      this.updateUserForm.controls["surname"].setValue(res.data.surname);
      this.updateUserForm.controls["email"].setValue(res.data.email);
      this.updateUserForm.controls["phoneNumber"].setValue(res.data.phoneNumber);
    });

    this.updateUserForm = this.fb.group({
      id: ["", Validators.required],
      companyId: [null, Validators.required],
      roleId: [null, Validators.required],
      name: ["", Validators.required],
      surname: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      phoneNumber: ["", Validators.required]
    });
  }

  updateUser() {
    this.isLoadingSubject.next(true);
    this.message = "";
    if (this.updateUserForm.valid) {
      this.userService.updateUser(this.updateUserForm.value).subscribe(
        res => {
          this.toastrService.success("İşlem Başarılı");
          this.isLoadingSubject.next(false);
          this.router.navigate(['/users']);
        },
        err => {
          console.log(err);
          err.error.messages.forEach(element => {
            this.message += element + '. ';
          });
          this.toastrService.error(this.message, "Hata");
          this.isLoadingSubject.next(false);
        }
      );
    } else {
      this.toastrService.warning("Formu Kontrol Ediniz.", "Uyarı");
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

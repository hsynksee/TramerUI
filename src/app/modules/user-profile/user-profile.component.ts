import { ChangeDetectorRef, Component, ContentChild, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from 'src/app/core/models/auth/user.model';
import { ChangePasswordModel } from 'src/app/core/models/user/change-password.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  id: number;
  userId: number;
  user: UserModel;
  changePasswordForm: FormGroup;
  showChangePasswordSection: boolean = false;

  hideOldPassword: boolean = true;
  hideNewPassword: boolean = true;
  hideNewPasswordRepeat: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private userService: UserService,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.changePasswordForm = this.fb.group({
      oldPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
      newPasswordRepeat: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.getUserDetail(this.authService.currentUserValue.id);
  }

  onSubmit() {
    const oldPassword = this.changePasswordForm.get('oldPassword').value;
    const newPassword = this.changePasswordForm.get('newPassword').value;
    const newPasswordRepeat = this.changePasswordForm.get('newPasswordRepeat').value;

    if (!oldPassword || !newPassword || !newPasswordRepeat) {
      this.toastr.warning('Lütfen bütün alanları doldurun.', 'Eksik Bilgi!');
      return;
    }

    const changePasswordModel: ChangePasswordModel = {
      userId: this.authService.currentUserValue.id,
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordRepeat: newPasswordRepeat,
    };

    this.userService.changePassword(changePasswordModel).subscribe(
      (response) => {
        this.toastr.info(response.messages.join(', '), 'Bilgi');
      },
      (error) => {
        this.toastr.error(error.message || 'Bir hata gerçekleşti', 'Hata!');
      }
    );
  }


  onOpenChangePassword() {
    this.showChangePasswordSection = true;
  }
  getUserDetail(id) {
    this.userService.getUserDetail(id).subscribe(
      (userDetail) => {
        this.user = userDetail.data;
        this.cdr.detectChanges();
      },
      (error) => {
        console.error('Error fetching user detail:', error);
        this.toastr.error(error.message || 'Hata.', 'Error');
      }
    );
  }
}

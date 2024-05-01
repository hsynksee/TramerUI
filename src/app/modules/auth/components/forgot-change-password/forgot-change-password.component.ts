import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthHTTPService } from 'src/app/core/services/auth/auth-http/auth-http.service';

@Component({
  selector: 'app-forgot-change-password',
  templateUrl: './forgot-change-password.component.html',
  styleUrls: ['./forgot-change-password.component.scss']
})
export class ForgotChangePasswordComponent implements OnInit {
  authKey: string;
  newPassword: string;
  newPasswordRepeat: string;

  hideNewPassword: boolean = true;
  hideNewPasswordRepeat: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private authHttpService: AuthHTTPService,
    private toastr:ToastrService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.authKey = this.route.snapshot.params.authKey;
    });
  }
  onSubmit() {
    if (!this.authKey || !this.newPassword || !this.newPasswordRepeat) {
      this.toastr.warning("Lütfen bütün alanları doldurunuz..");
      return;
    }

    if (this.newPassword !== this.newPasswordRepeat) {
      this.toastr.warning("Şifreler uyuşmamaktadır..");
      return;
    }

    this.authHttpService.changePassword(this.authKey, this.newPassword, this.newPasswordRepeat).subscribe(
      (response) => {
        if(!response.data)
        {
          this.toastr.warning(response.messages[0], 'hata');
        }
        if(response.data)
        {
          this.toastr.success(response.messages[0], 'Success');
          this.router.navigate(['/auth/login']);
        }
      },
      (error) => {
        this.toastr.error(error.messages[0], 'Error');
      }
    );
  }
}

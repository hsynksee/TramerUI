import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
  selector: 'app-company-create',
  templateUrl: './company-create.component.html'
})
export class CompanyCreateComponent implements OnInit {
  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  createCompanyForm: FormGroup;
  message: string;

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    private toastrService: ToastrService,
    private router: Router) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  ngOnInit() {
    this.createCompanyForm = this.fb.group({
      name: ["", Validators.required],
      phone: ["", Validators.required],
      taxNumber: ["", Validators.required],
      taxOffice: ["", Validators.required],
      queryPrice: [0, Validators.required],
      isActive: [true, Validators.required],
    });
  }

  createCompany() {
    this.isLoadingSubject.next(true);
    this.message = "";
    if (this.createCompanyForm.valid) {
      console.log(this.createCompanyForm.value);
      this.companyService.createCompany(this.createCompanyForm.value).subscribe(
        res => {
          this.toastrService.success("İşlem Başarılı");
          this.isLoadingSubject.next(false);
          this.router.navigate(['/companies']);
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

}

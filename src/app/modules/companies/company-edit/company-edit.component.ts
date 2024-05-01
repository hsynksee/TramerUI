import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { CompanyService } from 'src/app/core/services/company/company.service';

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html'
})
export class CompanyEditComponent implements OnInit {
  @Input() companyId: number;

  isLoading$: Observable<boolean>;
  isLoadingSubject: BehaviorSubject<boolean>;
  private unsubscribe: Subscription[] = [];
  updateCompanyForm: FormGroup;
  
  _onDestroy = new Subject<void>();
  message: string;

  constructor(private fb: FormBuilder,
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
    ) { 
      this.isLoadingSubject = new BehaviorSubject<boolean>(false);
      this.isLoading$ = this.isLoadingSubject.asObservable();
    }

  ngOnInit() {
    this.companyId = this.activatedRoute.snapshot.params.id;
    this.companyService.getCompanyDetail(this.companyId).subscribe(res => {
      this.updateCompanyForm.controls["id"].setValue(res.data.id);
      this.updateCompanyForm.controls["name"].setValue(res.data.name);
      this.updateCompanyForm.controls["phone"].setValue(res.data.phone);
      this.updateCompanyForm.controls["taxNumber"].setValue(res.data.taxNumber);
      this.updateCompanyForm.controls["taxOffice"].setValue(res.data.taxOffice);
      this.updateCompanyForm.controls["queryPrice"].setValue(res.data.queryPrice);
      this.updateCompanyForm.controls["isActive"].setValue(res.data.isActive);
    });

    this.updateCompanyForm = this.fb.group({
      id: ["", Validators.required],
      name: ["", Validators.required],
      phone: ["", Validators.required],
      taxNumber: ["", Validators.required],
      taxOffice: ["", Validators.required],
      queryPrice: [0, Validators.required],
      isActive: [true, Validators.required],
    });
  }

  updateCompany(){
    this.isLoadingSubject.next(true);
    this.message = "";
    if (this.updateCompanyForm.valid) {
      this.companyService.updateCompany(this.updateCompanyForm.value).subscribe(
        res => {
          this.toastrService.success("İşlem Başarılı");
          this.isLoadingSubject.next(false);
          this.router.navigate(['/companies']);
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
      this.toastrService.warning("Formu Kontrol Ediniz.","Uyarı");
      this.isLoadingSubject.next(false);
    }
  }

}

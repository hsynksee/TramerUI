import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TramerQueryTypeEnum, TramerQueryTypeLabelMapping } from 'src/app/core/enums/tramer-query-type.enum';
import { TramerQueryResultModel } from 'src/app/core/models/tramer-query-result/tramer-query-result.model';
import { TramerQueryResultService } from 'src/app/core/services/tramer-query-result/tramer-query-result.service';

@Component({
  selector: 'app-tramer-query-result',
  templateUrl: './tramer-query-result.component.html',
  styleUrls: ['./tramer-query-result.component.scss']
})
export class TramerQueryResultComponent implements OnInit {
  errorMessage: string;
  successMessage: string;

  tramerForm: FormGroup;

  TramerQueryTypeEnum = TramerQueryTypeEnum;
  TramerQueryTypeLabelMapping = TramerQueryTypeLabelMapping;

  selectedQueryType: TramerQueryTypeEnum;
  queryParameter: string;
  newQuery: boolean;
  tramerResult: TramerQueryResultModel;

  tramerData: any;
  tramerDamageData: any;

  isNonTramerResult: boolean = false;

  constructor(private tramerService: TramerQueryResultService,
    private cdr: ChangeDetectorRef,
    private toastr: ToastrService, private formBuilder: FormBuilder) {
    this.tramerForm = this.formBuilder.group({
      selectedQueryType: [, Validators.required],
      queryParameter: ["", Validators.required],
      newQuery: [false, Validators.required],
    });
  }
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.tramerForm.invalid) {
      this.toastr.error('Lütfen bütün alanları doldurun.');
      return;
    }
    const { selectedQueryType, queryParameter, newQuery } = this.tramerForm.value;

    this.tramerService
      .getTramerResult(selectedQueryType, queryParameter, newQuery)
      .subscribe(
        (result) => {
          if (result.data != null) {
            this.tramerResult = result.data;
            this.tramerData = result.data;
            this.tramerDamageData = result.data.damages;
            this.isNonTramerResult = false;
          } else {
            this.isNonTramerResult = true;
            this.tramerResult = null;
          }
          if (result.messages) {
            this.toastr.success(result.messages.join(', '));
          }
          this.cdr.detectChanges();
        },
        (error) => {
          this.toastr.error(error.error.message || 'Bir hata gerçekleşti. Lütfen sonra tekrar deneyiniz.');
        }
      );

  }

  copy() {
    let tData = this.tramerData;
    let damageData = this.tramerDamageData;
    var tbl = document.createElement('table');


    var tblBodySummary = document.createElement('tbody');
    //#region Şasi No
    var rowChasisNo = document.createElement('tr');
    rowChasisNo.innerHTML = `<td>Şasi Numarası</td><td>${tData.chassisNumber}</td>`
    tblBodySummary.appendChild(rowChasisNo);
    //#endregion
    //#region Araç
    var rowVehicle = document.createElement('tr');
    rowVehicle.innerHTML = `<td>Araç Bilgisi</td><td>${tData.vehicle}</td>`
    tblBodySummary.appendChild(rowVehicle);
    //#endregion
    //#region SorguTarihi
    var rowQueryDate = document.createElement('tr');
    rowQueryDate.innerHTML = `<td>Sorgu Tarihi</td><td>${tData.tramerQueryDate}</td>`
    tblBodySummary.appendChild(rowQueryDate);
    //#endregion
    //#region Hasar Adeti
    var rowDamageCount = document.createElement('tr');
    rowDamageCount.innerHTML = `<td>Hasar Adeti</td><td>${tData.totalDamageCount}</td>`
    tblBodySummary.appendChild(rowDamageCount);
    //#endregion
    //#region Toplam Hasar Fiyatı
    var rowTotalDamagePrice = document.createElement('tr');
    rowTotalDamagePrice.innerHTML = `<td>Toplam Hasar Fiyatı</td><td>${tData.totalDamagePrice}</td>`
    tblBodySummary.appendChild(rowTotalDamagePrice);
    //#endregion
    //#region Boş Satır
    var rowEmpty = document.createElement('tr');
    rowEmpty.innerHTML = `<td></td><td></td>`
    tblBodySummary.appendChild(rowEmpty);
    //#endregion

    tbl.appendChild(tblBodySummary);

    var tblBody = document.createElement('tbody');
    var headerow = document.createElement('tr');
    headerow.innerHTML = `<th>Hasar Tarihi</th><th>Değişen Parça</th><th>Hasar Açıklaması</th><th>Hasar Cinsi</th><th>Hasar Fiyatı</th>`;
    tblBody.appendChild(headerow);
    damageData.forEach((data) => {
      var row = document.createElement('tr');
      row.innerHTML = `<td>${data.damageDate}</td><td>${data.damageChangePart ? 'Evet' : 'Hayır'}</td><td>${data.damageDefinition}</td><td>${data.damageCurrency}</td><td>${data.damagePrice}</td>`;
      tblBody.appendChild(row);
    });
    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    // Copy the table element innerText to clipboard
    navigator.clipboard.writeText(tbl.innerText);
    // Hide the table element from DOM after copied
    tbl.style.display = "none";

    this.toastr.info("Kopyalandı..");
  }
}

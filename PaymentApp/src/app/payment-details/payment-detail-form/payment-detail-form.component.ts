import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { PaymentDetail } from '../../shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [
    FormsModule,
    
  ],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService, private toastr: ToastrService) {

  }

  onSubmit(form:NgForm) {
    this.service.formSubmitted = true;
    
    if (form.valid) {
      this.service.postPaymentDetail()
      .subscribe({
        next:res=>{
          this.service.list = res as PaymentDetail[];
          this.service.resetForm(form);
          this.toastr.success("Card data submitted!", "Payment Detail Register");
        },
        error: err => {console.error(err);}
      })
    }
    else {
      console.log("Please fill out all fields as required");
    }
  }

}

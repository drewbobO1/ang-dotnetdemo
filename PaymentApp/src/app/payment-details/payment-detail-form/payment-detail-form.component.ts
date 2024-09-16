import { Component } from '@angular/core';
import { PaymentDetailService } from '../../shared/payment-detail.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-payment-detail-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './payment-detail-form.component.html',
  styles: ``
})
export class PaymentDetailFormComponent {
  constructor(public service: PaymentDetailService) {

  }

  onSubmit(form:NgForm) {
    this.service.postPaymentDetail()
    .subscribe({
      next:res=>{
        console.log("POST res: ", res);
      },
      error: err => {console.error(err);}
    })
  }

}

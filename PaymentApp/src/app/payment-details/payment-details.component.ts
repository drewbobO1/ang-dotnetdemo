import { Component } from '@angular/core';
import { PaymentDetailFormComponent } from './payment-detail-form/payment-detail-form.component';
import { PaymentDetailService } from '../shared/payment-detail.service';

@Component({
  selector: 'app-payment-details',
  standalone: true,
  imports: [PaymentDetailFormComponent],
  templateUrl: './payment-details.component.html',
  styles: ``
})
export class PaymentDetailsComponent {
  constructor(public service: PaymentDetailService) {
    
  }
}

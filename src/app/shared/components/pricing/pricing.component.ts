import { Component, inject } from '@angular/core';
import { CheckoutService } from '../../../core/services/checkout.service';
import { Plano } from '../../../core/models/plano.model';
import { PLANOS } from '../../constants/planos.constants';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  private checkout = inject(CheckoutService);

  planos = PLANOS;
  loading = this.checkout.loading;

  assinar(plano: Plano): void {
    this.checkout.iniciarCheckout(plano);
  }
}

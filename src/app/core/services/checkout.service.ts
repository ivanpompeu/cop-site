import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Plano } from '../models/plano.model';

interface CheckoutSessionResponse {
  checkoutUrl: string;
}

@Injectable({ providedIn: 'root' })
export class CheckoutService {
  private http = inject(HttpClient);
  readonly loading = signal(false);

  iniciarCheckout(plano: Plano): void {
    if (this.loading()) return;
    this.loading.set(true);

    this.http
      .post<CheckoutSessionResponse>(`${environment.apiUrl}/public/checkout/session`, {
        stripePriceId: plano.stripePriceId
      })
      .subscribe({
        next: (res) => {
          window.location.href = res.checkoutUrl;
        },
        error: () => {
          this.loading.set(false);
          alert('Ocorreu um erro ao iniciar o checkout. Tente novamente.');
        }
      });
  }
}

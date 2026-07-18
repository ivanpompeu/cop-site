import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.component.html',
  styleUrl: './sucesso.component.scss'
})
export class SucessoComponent {
  copAppUrl = environment.copAppUrl;
}

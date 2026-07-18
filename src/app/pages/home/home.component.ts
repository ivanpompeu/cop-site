import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { FeaturesComponent } from '../../shared/components/features/features.component';
import { PricingComponent } from '../../shared/components/pricing/pricing.component';
import { FaqComponent } from '../../shared/components/faq/faq.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, HeroComponent, FeaturesComponent, PricingComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

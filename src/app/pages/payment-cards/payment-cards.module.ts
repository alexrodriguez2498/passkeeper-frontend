import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentCardsComponent } from './payment-cards/payment-cards.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [PaymentCardsComponent],
    imports: [
        CommonModule,
        SharedModule,
        MatIconModule,
        MatButtonModule,
        RouterModule.forChild([
            {path: '', component: PaymentCardsComponent}
        ]),
        MatBadgeModule,
        MatTooltipModule,
    ]
})
export class PaymentCardsModule { }
